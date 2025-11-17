var Fe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var st=Fe((at,K)=>{const De={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"https://api.artisan.education",VITE_GEONAMES_USERNAME:"artisan_education",VITE_PIBODY_FIRMWARE_LIBS_URL:"https://raw.githubusercontent.com/rt-zone/frozen_libs/main/",VITE_PIBODY_MODULES_LIBS_URL:"https://raw.githubusercontent.com/rt-zone/pibody_libs/main/pibody/"};X("VITE_BASE_URL");const se=X("VITE_PIBODY_MODULES_LIBS_URL"),Re=X("VITE_PIBODY_FIRMWARE_LIBS_URL");function X(e){const t=De[e];if(t===void 0)throw new Error(`Env variable ${e} is required`);return t}var Y=(e=>(e[e.NONE=-1]="NONE",e[e.IN=0]="IN",e[e.OUT=1]="OUT",e[e.ANALOG=5]="ANALOG",e[e.PWM=6]="PWM",e))(Y||{}),W=(e=>(e[e.NONE=-1]="NONE",e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e))(W||{}),N=(e=>(e.PinGetValue="pin get value",e.PinGetMode="pin get mode",e.PinGetPull="pin get pull",e.AdcReadU16="adc read_u16",e.I2CScan="i2c scan",e.I2CReadFromMem="i2c readfrom_mem",e.Input="input",e))(N||{});const re=2;var h=(e=>(e.I2CWriteToMem="i2c writefrom_mem",e.PinSetValue="pin set value",e.PinSetMode="pin set mode",e.PinSetPull="pin set pull",e.PwmFreq="pwm freq",e.PwmDutyU16="pwm duty_u16",e.Output="output",e.Sleep="sleep",e.DisplayText="display text",e.DisplayClear="display clear",e.NeoPixelWrite="neopixel write",e.RawOutput="raw output",e.KeyboardInterrupt="keyboard interrupt",e.Error="error",e))(h||{}),q=(e=>(e.Finished="finished",e.Initialized="initialized",e.Timeout="timeout",e))(q||{});Object.values({...N,...h,...q});new Set(Object.values(N));new Set(Object.values(q));new Set(Object.values(h));const ke=`
import types, sys

framebuf = types.ModuleType("framebuf")

class FrameBuffer:
    def __init__(self, buffer, width, height, format):
        self.buffer = buffer
        self.width = width
        self.height = height
        self.format = format
    def fill(self, c): pass
    def pixel(self, x, y, c): pass
    def hline(self, x, y, w, c): pass
    def vline(self, x, y, h, c): pass
    def rect(self, x, y, w, h, c): pass
    def fill_rect(self, x, y, w, h, c): pass
    def text(self, s, x, y, c): pass
    def scroll(self, dx, dy): pass

framebuf.FrameBuffer = FrameBuffer
sys.modules["framebuf"] = framebuf
`,Ue=`
import sys, types
import mpbridge

neopixel = types.ModuleType('neopixel')

class NeoPixel:
    def __init__(self, pin, n, bpp=3, timing=1):
        self.pin = int(getattr(pin, '_id', pin))
        self.n = int(n)
        self.bpp = int(bpp)
        self.timing = int(timing)
        self.pixels = [[0 for _ in range(self.bpp)] for _ in range(self.n)]

    def fill(self, pixel):
        arr = list(pixel) if hasattr(pixel, '__iter__') else [0,0,0]
        arr = [int(x) for x in arr[:self.bpp]]
        for i in range(self.n):
            self.pixels[i] = arr[:]  # copy

    def write(self):
        safe = [list(map(int, p[:self.bpp])) for p in self.pixels]
        mpbridge.neopixel_write(self.pin, safe)

    show = write

    def __len__(self):
        return self.n

    def set_pixel(self, index, val):
        if 0 <= index < self.n:
            arr = list(val) if hasattr(val, '__iter__') else [0,0,0]
            self.pixels[index] = [int(x) for x in arr[:self.bpp]]

    def get_pixel(self, index):
        if 0 <= index < self.n:
            return list(self.pixels[index])
        return [0]*self.bpp

    def __setitem__(self, index, val):
        self.set_pixel(int(index), val)

    def __getitem__(self, index):
        return self.get_pixel(int(index))

    # aliases commonly seen in libs
    set = set_pixel
    get = get_pixel

neopixel.NeoPixel = NeoPixel
sys.modules['neopixel'] = neopixel
`,Me=`
import sys, types
import mpbridge

machine = types.ModuleType("machine")

class Pin:
    IN = mpbridge.Mode_IN
    OUT = mpbridge.Mode_OUT
    PULL_UP = mpbridge.Pull_UP
    PULL_DOWN = mpbridge.Pull_DOWN
    PULL_NONE = mpbridge.Pull_NONE
    # IRQ flags (bitmask), common in MicroPython
    IRQ_RISING = 1
    IRQ_FALLING = 2
    IRQ_HIGH_LEVEL = 4
    IRQ_LOW_LEVEL = 8

    def __init__(self, pin_id, mode=None, pull=None, value=None):
        self._id = int(pin_id)
        if mode is None:
            mode = self.IN
        if pull is None:
            pull = self.PULL_NONE
        mpbridge.pin_set_mode(self._id, int(mode))
        mpbridge.pin_set_pull(self._id, int(pull))
        if value is not None:
            mpbridge.pin_set_value(self._id, 1 if value else 0)

    def value(self, v=None):
        if v is None:
            return mpbridge.pin_get_value(self._id)
        mpbridge.pin_set_value(self._id, 1 if v else 0)

    def on(self):
        self.value(1)

    def off(self):
        self.value(0)

    def toggle(self):
        state = self.value()
        self.value(0 if state else 1)

class PWM:
    def __init__(self, pin, freq=0, duty_u16=0):
        self._id = int(pin._id) if hasattr(pin, '_id') else int(pin)
        self._freq = 0
        self._duty = 0
        # Ensure OUT mode for PWM
        mpbridge.pin_set_mode(self._id, Pin.OUT)
        if freq:
            self.freq(freq)
        if duty_u16:
            self.duty_u16(duty_u16)

    def freq(self, f=None):
        if f is None:
            return self._freq
        self._freq = int(f)
        mpbridge.pwm_freq(self._id, self._freq)

    def duty_u16(self, d=None):
        if d is None:
            return self._duty
        self._duty = int(d)
        mpbridge.pwm_duty_u16(self._id, self._duty)

class ADC:
    def __init__(self, pin_or_ch):
        p = int(pin_or_ch._id) if hasattr(pin_or_ch, '_id') else int(pin_or_ch)
        # Map as in Pico: 0/1/2 are channels -> pins 26/27/28
        if p in (0, 1, 2):
            p = 26 + p
        elif p not in (26, 27, 28):
            raise Exception(f"Pin({p}) doesn't have ADC capabilities")
        self._id = p
        # Analog mode
        mpbridge.pin_set_mode(self._id, Pin.PULL_NONE)  # Mode is analog in JS side

    def read_u16(self):
        return int(mpbridge.adc_read_u16(self._id))

class SPI:
    MSB = 0
    LSB = 1

    def __init__(self, id=0, *, baudrate=1000000, polarity=0, phase=0, bits=8, firstbit=MSB, sck=None, mosi=None, miso=None):
        self.id = int(id)
        self.baudrate = int(baudrate)
        self.polarity = int(polarity)
        self.phase = int(phase)
        self.bits = int(bits)
        self.firstbit = int(firstbit)
        self.sck = sck
        self.mosi = mosi
        self.miso = miso

    def init(self, *args, **kwargs):
        return None

    def deinit(self):
        return None

    def write(self, buf):
        # No-op in emulator for now
        return len(buf) if hasattr(buf, '__len__') else None

    def read(self, nbytes, write=0x00):
        return bytes([0] * int(nbytes))

    def readinto(self, buf, write=0x00):
        try:
            mv = memoryview(buf)
            for i in range(len(mv)):
                mv[i] = 0
            return None
        except TypeError:
            return None

    def write_readinto(self, write_buf, read_buf):
        # Fill read_buf with zeros
        try:
            mv = memoryview(read_buf)
            for i in range(len(mv)):
                mv[i] = 0
            return None
        except TypeError:
            return None

class I2C:
    def __init__(self, id, sda=None, scl=None, freq=400000, timeout=50000):
        self.id = int(id)
        self.sda = sda
        self.scl = scl
        self.freq = int(freq)
        self.timeout = int(timeout)
        self._sda_id = int(sda._id) if hasattr(sda, '_id') else int(sda)
        self._scl_id = int(scl._id) if hasattr(scl, '_id') else int(scl)

    def readfrom(self, addr, nbytes):
        return self.readfrom_mem(addr, 0, nbytes)

    def readfrom_mem(self, addr, memaddr, nbytes):
        data = mpbridge.i2c_readfrom_mem(self._sda_id, self._scl_id, int(addr), int(memaddr), int(nbytes))
        return bytes(data)

    def writeto_mem(self, addr, memaddr, buf):
        data = list(buf) if hasattr(buf, '__iter__') else []
        mpbridge.i2c_writeto_mem(self._sda_id, self._scl_id, int(addr), int(memaddr), data)

    def scan(self):
        return mpbridge.i2c_scan(self._sda_id, self._scl_id)

    def writeto(self, addr, buf):
        data = list(buf) if hasattr(buf, '__iter__') else []
        if len(data) == 0:
            return
        memaddr = int(data[0])
        payload = data[1:]
        mpbridge.i2c_writeto_mem(self._sda_id, self._scl_id, int(addr), memaddr, payload)

def SoftI2C(sda, scl, freq=400000, timeout=50000):
    return I2C(0, sda=sda, scl=scl, freq=freq, timeout=timeout)

machine.Pin = Pin
machine.PWM = PWM
machine.ADC = ADC
machine.SPI = SPI
machine.I2C = I2C
machine.SoftI2C = SoftI2C

sys.modules['machine'] = machine
`,Te=`
import sys, types
import display as _display

mod = types.ModuleType('pibody.Display')

class Display:
    def __init__(self):
        pass

    def print(self, *args):
        _display.print(' '.join(str(arg) for arg in args))

    def clear(self):
        _display.clear()

display = Display()

mod.Display = Display
mod.display = display
sys.modules['pibody.Display'] = mod
`,qe=`
import sys, types

mod = types.ModuleType('pibody.iot.WiFi')

class WiFi:
    def __init__(self):
        pass

mod.WiFi = WiFi
sys.modules['pibody.iot.WiFi'] = mod
`,Be=`
import sys, types

mod = types.ModuleType('pibody.iot.telegram_bot')

class TelegramBot:
    def __init__(self):
        pass

mod.TelegramBot = TelegramBot
sys.modules['pibody.iot.telegram_bot'] = mod
`,je=`
import sys, types
from SimRotaryEncoder import RotaryEncoder

mod = types.ModuleType('pibody.modules.RotaryEncoder')

mod.RotaryEncoder = RotaryEncoder
sys.modules['pibody.modules.RotaryEncoder'] = mod
`,We=`
import sys, types

mod = types.ModuleType('pibody.Demo.main')

class Demo:
    def __init__(self):
        pass

mod.Demo = Demo
sys.modules['pibody.Demo.main'] = mod
`,$e=`
import time
import utime
time.time = utime.time
time.time_ns = utime.time_ns
time.sleep = utime.sleep
time.sleep_ms = utime.sleep_ms
time.sleep_us = utime.sleep_us
time.ticks_ms = utime.ticks_ms
time.ticks_us = utime.ticks_us
time.ticks_add = utime.ticks_add
time.ticks_diff = utime.ticks_diff
`,Ve=`
import builtins

def const(x):
    return x

builtins.const = const
`;var Ce=Object.defineProperty,m=(e,t)=>Ce(e,"name",{value:t,configurable:!0}),oe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function ae(e){return!isNaN(parseFloat(e))&&isFinite(e)}m(ae,"_isNumber");function I(e){return e.charAt(0).toUpperCase()+e.substring(1)}m(I,"_capitalize");function C(e){return function(){return this[e]}}m(C,"_getter");var R=["isConstructor","isEval","isNative","isToplevel"],k=["columnNumber","lineNumber"],U=["fileName","functionName","source"],ze=["args"],He=["evalOrigin"],j=R.concat(k,U,ze,He);function S(e){if(e)for(var t=0;t<j.length;t++)e[j[t]]!==void 0&&this["set"+I(j[t])](e[j[t]])}m(S,"StackFrame");S.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof S)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new S(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",a=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:a?a+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}};S.fromString=m(function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),a=e.substring(0,t),r=e.substring(t+1,n).split(","),i=e.substring(n+1);if(i.indexOf("@")===0)var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),l=s[1],u=s[2],y=s[3];return new S({functionName:a,args:r||void 0,fileName:l,lineNumber:u||void 0,columnNumber:y||void 0})},"StackFrame$$fromString");for(O=0;O<R.length;O++)S.prototype["get"+I(R[O])]=C(R[O]),S.prototype["set"+I(R[O])]=function(e){return function(t){this[e]=!!t}}(R[O]);var O;for(A=0;A<k.length;A++)S.prototype["get"+I(k[A])]=C(k[A]),S.prototype["set"+I(k[A])]=function(e){return function(t){if(!ae(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(k[A]);var A;for(L=0;L<U.length;L++)S.prototype["get"+I(U[L])]=C(U[L]),S.prototype["set"+I(U[L])]=function(e){return function(t){this[e]=String(t)}}(U[L]);var L,z=S;function le(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:m(function(n){if(n.stack&&n.stack.match(e))return this.parseV8OrIE(n);if(n.stack)return this.parseFFOrSafari(n);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:m(function(n){if(n.indexOf(":")===-1)return[n];var a=/(.+?)(?::(\d+))?(?::(\d+))?$/,r=a.exec(n.replace(/[()]/g,""));return[r[1],r[2]||void 0,r[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:m(function(n){var a=n.stack.split(`
`).filter(function(r){return!!r.match(e)},this);return a.map(function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),s=i.match(/ (\(.+\)$)/);i=s?i.replace(s[0],""):i;var l=this.extractLocation(s?s[1]:i),u=s&&i||void 0,y=["eval","<anonymous>"].indexOf(l[0])>-1?void 0:l[0];return new z({functionName:u,fileName:y,lineNumber:l[1],columnNumber:l[2],source:r})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:m(function(n){var a=n.stack.split(`
`).filter(function(r){return!r.match(t)},this);return a.map(function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new z({functionName:r});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,s=r.match(i),l=s&&s[1]?s[1]:void 0,u=this.extractLocation(r.replace(i,""));return new z({functionName:l,fileName:u[0],lineNumber:u[1],columnNumber:u[2],source:r})},this)},"ErrorStackParser$$parseFFOrSafari")}}m(le,"ErrorStackParser");var Ge=new le,Ye=Ge,x=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,fe=x&&typeof K<"u"&&typeof K.exports<"u"&&typeof oe<"u"&&typeof __dirname<"u",Je=x&&!fe,Qe=typeof Deno<"u",de=!x&&!Qe,Ke=de&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",Xe=de&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var ce,J,ue,ie,Z;async function ee(){if(!x||(ce=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,ie=await import("./__vite-browser-external-9wXp6ZBx.js"),Z=await import("./__vite-browser-external-9wXp6ZBx.js"),ue=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,J=await import("./__vite-browser-external-9wXp6ZBx.js"),te=J.sep,typeof oe<"u"))return;let e=ie,t=await import("./__vite-browser-external-9wXp6ZBx.js"),n=await import("./__vite-browser-external-9wXp6ZBx.js"),a=await import("./__vite-browser-external-9wXp6ZBx.js"),r={fs:e,crypto:t,ws:n,child_process:a};globalThis.require=function(i){return r[i]}}m(ee,"initNodeModules");function me(e,t){return J.resolve(t||".",e)}m(me,"node_resolvePath");function pe(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}m(pe,"browser_resolvePath");var Q;x?Q=me:Q=pe;var te;x||(te="/");function ye(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:Z.readFile(e).then(n=>new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}}m(ye,"node_getBinaryResponse");function _e(e,t){let n=new URL(e,location);return{response:fetch(n,t?{integrity:t}:{})}}m(_e,"browser_getBinaryResponse");var V;x?V=ye:V=_e;async function he(e,t){let{response:n,binary:a}=V(e,t);if(a)return a;let r=await n;if(!r.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await r.arrayBuffer())}m(he,"loadBinaryFile");var $;if(Ke)$=m(async e=>await import(e),"loadScript");else if(Xe)$=m(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(x)$=we;else throw new Error("Cannot determine runtime environment");async function we(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?ue.runInThisContext(await(await fetch(e)).text()):await import(ce.pathToFileURL(e).href)}m(we,"nodeLoadScript");async function be(e){if(x){await ee();let t=await Z.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}m(be,"loadLockFile");async function ge(){if(fe)return __dirname;let e;try{throw new Error}catch(a){e=a}let t=Ye.parse(e)[0].fileName;if(x&&!t.startsWith("file://")&&(t=`file://${t}`),Je){let a=await import("./__vite-browser-external-9wXp6ZBx.js");return(await import("./__vite-browser-external-9wXp6ZBx.js")).fileURLToPath(a.dirname(t))}let n=t.lastIndexOf(te);if(n===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,n)}m(ge,"calculateDirname");function ve(e){let t=e.FS,n=e.FS.filesystems.MEMFS,a=e.PATH,r={DIR_MODE:16895,FILE_MODE:33279,mount:function(i){if(!i.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return n.mount.apply(null,arguments)},syncfs:async(i,s,l)=>{try{let u=r.getLocalSet(i),y=await r.getRemoteSet(i),w=s?y:u,v=s?u:y;await r.reconcile(i,w,v),l(null)}catch(u){l(u)}},getLocalSet:i=>{let s=Object.create(null);function l(w){return w!=="."&&w!==".."}m(l,"isRealDir");function u(w){return v=>a.join2(w,v)}m(u,"toAbsolute");let y=t.readdir(i.mountpoint).filter(l).map(u(i.mountpoint));for(;y.length;){let w=y.pop(),v=t.stat(w);t.isDir(v.mode)&&y.push.apply(y,t.readdir(w).filter(l).map(u(w))),s[w]={timestamp:v.mtime,mode:v.mode}}return{type:"local",entries:s}},getRemoteSet:async i=>{let s=Object.create(null),l=await Ze(i.opts.fileSystemHandle);for(let[u,y]of l)u!=="."&&(s[a.join2(i.mountpoint,u)]={timestamp:y.kind==="file"?(await y.getFile()).lastModifiedDate:new Date,mode:y.kind==="file"?r.FILE_MODE:r.DIR_MODE});return{type:"remote",entries:s,handles:l}},loadLocalEntry:i=>{let s=t.lookupPath(i).node,l=t.stat(i);if(t.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(t.isFile(l.mode))return s.contents=n.getFileDataAsTypedArray(s),{timestamp:l.mtime,mode:l.mode,contents:s.contents};throw new Error("node type not supported")},storeLocalEntry:(i,s)=>{if(t.isDir(s.mode))t.mkdirTree(i,s.mode);else if(t.isFile(s.mode))t.writeFile(i,s.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(i,s.mode),t.utime(i,s.timestamp,s.timestamp)},removeLocalEntry:i=>{var s=t.stat(i);t.isDir(s.mode)?t.rmdir(i):t.isFile(s.mode)&&t.unlink(i)},loadRemoteEntry:async i=>{if(i.kind==="file"){let s=await i.getFile();return{contents:new Uint8Array(await s.arrayBuffer()),mode:r.FILE_MODE,timestamp:s.lastModifiedDate}}else{if(i.kind==="directory")return{mode:r.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+i.kind)}},storeRemoteEntry:async(i,s,l)=>{let u=i.get(a.dirname(s)),y=t.isFile(l.mode)?await u.getFileHandle(a.basename(s),{create:!0}):await u.getDirectoryHandle(a.basename(s),{create:!0});if(y.kind==="file"){let w=await y.createWritable();await w.write(l.contents),await w.close()}i.set(s,y)},removeRemoteEntry:async(i,s)=>{await i.get(a.dirname(s)).removeEntry(a.basename(s)),i.delete(s)},reconcile:async(i,s,l)=>{let u=0,y=[];Object.keys(s.entries).forEach(function(b){let o=s.entries[b],f=l.entries[b];(!f||t.isFile(o.mode)&&o.timestamp.getTime()>f.timestamp.getTime())&&(y.push(b),u++)}),y.sort();let w=[];if(Object.keys(l.entries).forEach(function(b){s.entries[b]||(w.push(b),u++)}),w.sort().reverse(),!u)return;let v=s.type==="remote"?s.handles:l.handles;for(let b of y){let o=a.normalize(b.replace(i.mountpoint,"/")).substring(1);if(l.type==="local"){let f=v.get(o),c=await r.loadRemoteEntry(f);r.storeLocalEntry(b,c)}else{let f=r.loadLocalEntry(b);await r.storeRemoteEntry(v,o,f)}}for(let b of w)if(l.type==="local")r.removeLocalEntry(b);else{let o=a.normalize(b.replace(i.mountpoint,"/")).substring(1);await r.removeRemoteEntry(v,o)}}};e.FS.filesystems.NATIVEFS_ASYNC=r}m(ve,"initializeNativeFS");var Ze=m(async e=>{let t=[];async function n(r){for await(let i of r.values())t.push(i),i.kind==="directory"&&await n(i)}m(n,"collect"),await n(e);let a=new Map;a.set(".",e);for(let r of t){let i=(await e.resolve(r)).join("/");a.set(i,r)}return a},"getFsHandles");function Ee(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Ie(e),quit(n,a){throw t.exited={status:n,toThrow:a},a},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:n=>e.indexURL+n,instantiateWasm:Oe(e.indexURL)};return t}m(Ee,"createSettings");function Se(e){return function(t){let n="/";try{t.FS.mkdirTree(e)}catch(a){console.error(`Error occurred while making a home directory '${e}':`),console.error(a),console.error(`Using '${n}' for a home directory instead`),e=n}t.FS.chdir(e)}}m(Se,"createHomeDirectory");function xe(e){return function(t){Object.assign(t.ENV,e)}}m(xe,"setEnvironment");function Pe(e){return t=>{for(let n of e)t.FS.mkdirTree(n),t.FS.mount(t.FS.filesystems.NODEFS,{root:n},n)}}m(Pe,"mountLocalDirectories");function Ne(e){let t=he(e);return n=>{let a=n._py_version_major(),r=n._py_version_minor();n.FS.mkdirTree("/lib"),n.FS.mkdirTree(`/lib/python${a}.${r}/site-packages`),n.addRunDependency("install-stdlib"),t.then(i=>{n.FS.writeFile(`/lib/python${a}${r}.zip`,i)}).catch(i=>{console.error("Error occurred while installing the standard library:"),console.error(i)}).finally(()=>{n.removeRunDependency("install-stdlib")})}}m(Ne,"installStdlib");function Ie(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Ne(t),Se(e.env.HOME),xe(e.env),Pe(e._node_mounts),ve]}m(Ie,"getFileSystemInitializationFuncs");function Oe(e){if(typeof WasmOffsetConverter<"u")return;let{binary:t,response:n}=V(e+"pyodide.asm.wasm");return function(a,r){return async function(){try{let i;n?i=await WebAssembly.instantiateStreaming(n,a):i=await WebAssembly.instantiate(await t,a);let{instance:s,module:l}=i;r(s,l)}catch(i){console.warn("wasm instantiation failed!"),console.warn(i)}}(),{}}}m(Oe,"getInstantiateWasmFunc");var ne="0.27.2";async function Ae(e={}){var t,n;await ee();let a=e.indexURL||await ge();a=Q(a),a.endsWith("/")||(a+="/"),e.indexURL=a;let r={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:a+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:a,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"f88dc4abb40ec8e780c94a5f70bcef45ec9eb3c1aee1c99da527febfef1c6f3f"},i=Object.assign(r,e);(t=i.env).HOME??(t.HOME="/home/pyodide"),(n=i.env).PYTHONINSPECT??(n.PYTHONINSPECT="1");let s=Ee(i),l=s.API;if(l.lockFilePromise=be(i.lockFileURL),typeof _createPyodideModule!="function"){let b=`${i.indexURL}pyodide.asm.js`;await $(b)}let u;if(e._loadSnapshot){let b=await e._loadSnapshot;ArrayBuffer.isView(b)?u=b:u=new Uint8Array(b),s.noInitialRun=!0,s.INITIAL_MEMORY=u.length}let y=await _createPyodideModule(s);if(s.exited)throw s.exited.toThrow;if(e.pyproxyToStringRepr&&l.setPyProxyToStringMethod(!0),l.version!==ne&&i.checkAPIVersion)throw new Error(`Pyodide version does not match: '${ne}' <==> '${l.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);y.locateFile=b=>{throw new Error("Didn't expect to load any more file_packager files!")};let w;u&&(w=l.restoreSnapshot(u));let v=l.finalizeBootstrap(w,e._snapshotDeserializer);return l.sys.path.insert(0,l.config.env.HOME),v.version.includes("dev")||l.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${v.version}/full/`),l._pyodide.set_excepthook(),await l.packageIndexReady,l.initializeStreams(i.stdin,i.stdout,i.stderr),v}m(Ae,"loadPyodide");const et=new SharedArrayBuffer(16),B=new Int32Array(et),tt=new SharedArrayBuffer(2),T=new Uint8Array(tt);function E(e){Atomics.store(B,0,0);const t=Le.currentframe().f_lineno;postMessage({content:e,line:t}),Atomics.wait(B,0,0)}function P(e){Atomics.store(B,0,0),postMessage({content:e,line:-1}),Atomics.wait(B,0,0)}function D(e){postMessage({content:e,line:-1})}function rt(e,t){return e+t}function it(e,t){return e-t}async function nt(){return await fetch(se+"manifest.json").then(t=>t.json()).catch(()=>{})}function H(e,t,n){const a=`
import sys
import os

file_path = "/home/pyodide/${t}.py"
if os.path.exists(file_path):
    os.remove(file_path)

sys.modules.pop("${t}", None)
`;e.runPython(a),e.registerJsModule(t,n)}let Le,G=!1;(async()=>{function e(){if(P({command:h.Output,request:{output:"> "}}),G){let c="",d=0;const _=new SharedArrayBuffer(256),p=new Uint8Array(_);for(P({command:N.Input,request:{},result:p});;){const g=Atomics.load(p,d);if(g==10)break;c+=String.fromCharCode(g),d++}return P({command:h.RawOutput,request:{output:c+`
\r`}}),c}const o=new Uint8Array(new SharedArrayBuffer(4));let f="";for(;;){P({command:N.Input,request:{},result:o});const c=new Int32Array(o.buffer)[0],d=String.fromCodePoint(c);if(c===10){P({command:h.Output,request:{output:d}});break}else c===8?f.length>0&&(P({command:h.Output,request:{output:d}}),f=f.substring(0,f.length-1)):(P({command:h.Output,request:{output:d}}),f+=d);r.checkInterrupt()}return f}const t=Ae({stdout:o=>P({command:h.Output,request:{output:o+`
\r`}}),stdin:e}),n=(async()=>{const o=await nt(),f=Object.entries(o).map(async([d,_])=>{if(_)try{if(!d.includes("RotaryEncoder.py")){if(!d.includes("Display.py")){if(!d.includes("iot/")){if(!d.includes("Demo/")){const g=await(await fetch(se+d)).text();return["pibody/"+d,g]}}}}}catch{return null}}),c=await Promise.all(f);return new Map(c.filter(d=>!!d))})(),a=(async()=>{const o=["BME280.py","MPU6050.py","LSM6DS3.py","VEML6040.py","VL53L0X.py","SSD1306.py","SimRotaryEncoder.py"];return(await Promise.all(o.map(async c=>{try{const d=await fetch(Re+c);if(!d.ok)throw new Error(`Failed to fetch ${c}`);const _=await d.text();return[c,_]}catch(d){return console.error(d),null}}))).filter(c=>c!==null)})(),[r,i,s]=await Promise.all([t,n,a]);Le=r.pyimport("inspect");const l=[...i,...s];for(const[o,f]of l){const c=`/home/pyodide/${o}`;try{r.FS.mkdirTree(c.replace(/\/[^/]+$/,"")),r.FS.writeFile(c,f)}catch(d){console.error("Error writing file to Pyodide FS:",o,d)}}const u=new Int32Array(new SharedArrayBuffer(4)),y={sleep:o=>{const f=o*1e3;y.sleep_ms(f)},sleep_ms:o=>{if(E({command:h.Sleep,request:{time_ms:o}}),G)return;const c=performance.now()+o,d=Math.min(o/20,50);for(;performance.now()<c;){const _=c-performance.now();Atomics.wait(u,0,0,Math.min(d,_)),r.checkInterrupt()}},sleep_us:o=>{y.sleep_ms(o/1e3)},ticks_ms:()=>performance.now(),ticks_us:()=>performance.now()*1e3,ticks_add:rt,ticks_diff:it,time:()=>Date.now(),time_ns:()=>performance.now()*1e3*1e3},w={print(...o){let f=" ",c=`
\r`;o.length>0&&o[o.length-1]!==null&&typeof o[o.length-1]=="object"&&("sep"in o[o.length-1]||"end"in o[o.length-1])&&({sep:f=f,end:c=c}=o.pop());const d=o.map(String).join(f)+c;E({command:h.Output,request:{output:d}})}},v={print:o=>{E({command:h.DisplayText,request:{text:o,x:0,y:16}})},clear:()=>{E({command:h.DisplayClear,request:{}})}},b={Mode_IN:Y.IN,Mode_OUT:Y.OUT,Pull_NONE:W.NONE,Pull_UP:W.UP,Pull_DOWN:W.DOWN,pin_set_mode(o,f){E({command:h.PinSetMode,request:{pin:o,mode:f}})},pin_set_pull(o,f){E({command:h.PinSetPull,request:{pin:o,pull:f}})},pin_set_value(o,f){E({command:h.PinSetValue,request:{pin:o,value:f}})},pin_get_value(o){const f=new Int8Array(new SharedArrayBuffer(4));return E({command:N.PinGetValue,request:{pin:o},result:f}),Atomics.load(f,0)},pwm_freq(o,f){E({command:h.PwmFreq,request:{pin:o,freq:f}})},pwm_duty_u16(o,f){E({command:h.PwmDutyU16,request:{pin:o,duty_u16:f}})},adc_read_u16(o){const f=new Uint16Array(new SharedArrayBuffer(2));return E({command:N.AdcReadU16,request:{pin:o},result:f}),Atomics.load(f,0)},neopixel_write(o,f){function c(p){if(p&&typeof p=="object"){if(Array.isArray(p))return p.map(g=>Number(g));if(typeof p.toJs=="function")try{const g=p.toJs({create_proxies:!1});return c(g)}catch{}if(typeof p[Symbol.iterator]=="function")return Array.from(p,g=>Number(g))}return[]}function d(p){let g;if(Array.isArray(p))g=p;else if(p&&typeof p.toJs=="function")try{const F=p.toJs({create_proxies:!1});return d(F)}catch{g=[]}else p&&typeof p[Symbol.iterator]=="function"?g=Array.from(p):g=[];return g.map(F=>c(F))}const _=d(f);P({command:h.NeoPixelWrite,request:{pin:o,pixels:_}})},i2c_readfrom_mem(o,f,c,d,_){const p=new SharedArrayBuffer(1+_),g=new Uint8Array(p);return E({command:N.I2CReadFromMem,request:{sda:o,scl:f,addr:c,memaddr:d,nbytes:_},result:g}),Array.from(g)},i2c_writeto_mem(o,f,c,d,_){const p=_ instanceof Uint8Array?new Uint8Array(_):new Uint8Array(_);E({command:h.I2CWriteToMem,request:{sda:o,scl:f,addr:c,memaddr:d,buf:p}})},i2c_scan(o,f){const c=new SharedArrayBuffer(1020),d=new Int32Array(c);E({command:N.I2CScan,request:{sda:o,scl:f},result:d});const _=Atomics.load(d,0);return _<0?[]:[_]}};H(r,"utime",y),H(r,"display",v),H(r,"mpbridge",b),r.globals.set("print",w.print),r.runPython($e),r.runPython(Ve),r.runPython(ke),r.runPython(Me),r.runPython(Te),r.runPython(Ue),r.runPython(qe),r.runPython(Be),r.runPython(je),r.runPython(We),r.setInterruptBuffer(T),self.onmessage=o=>{const{command:f,code:c,isReplay:d}=o.data;if(f==="runPython"){if(!r){D({command:h.Error,request:{message:"Interpreter not initialized"}});return}try{G=d,r.runPython(c),D({command:q.Finished,request:{}})}catch(_){let p="";if(T[0]!==re&&T[1]===re)T[1]=0,D({command:h.KeyboardInterrupt,request:{message:`KeyboardInterrupt
\r`}});else if(_ instanceof Error){const g=_.message.split(`
`),F=g.findIndex(M=>M.includes("<exec>"));F!==-1?p=g.slice(F).filter(M=>!M.includes("mpWorker.ts")&&!/mpWorker-[A-Za-z0-9]+\.js/.test(M)&&!M.includes("pyodide.asm.js")).join(`
`):p=_.message,D({command:h.Error,request:{message:p}})}else p=String(_),D({command:h.Error,request:{message:p}})}}},D({command:q.Initialized,request:{sharedArrayInterrupt:T,sharedWakeupArray:B}})})()});export default st();
