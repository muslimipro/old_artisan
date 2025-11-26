var Oe=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var yt=Oe((bt,K)=>{const Fe={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE_URL:"https://api.artisan.education",VITE_GEONAMES_USERNAME:"artisan_education",VITE_PIBODY_FIRMWARE_LIBS_URL:"https://raw.githubusercontent.com/rt-zone/frozen_libs/main/",VITE_PIBODY_MODULES_LIBS_URL:"https://raw.githubusercontent.com/rt-zone/pibody_libs/main/pibody/"};Z("VITE_BASE_URL");const oe=Z("VITE_PIBODY_MODULES_LIBS_URL"),De=Z("VITE_PIBODY_FIRMWARE_LIBS_URL");function Z(e){const t=Fe[e];if(t===void 0)throw new Error(`Env variable ${e} is required`);return t}var Y=(e=>(e[e.NONE=-1]="NONE",e[e.IN=0]="IN",e[e.OUT=1]="OUT",e[e.ANALOG=5]="ANALOG",e[e.PWM=6]="PWM",e))(Y||{}),W=(e=>(e[e.NONE=-1]="NONE",e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e))(W||{}),M=(e=>(e.PinGetValue="pin get value",e.PinGetMode="pin get mode",e.PinGetPull="pin get pull",e.AdcReadU16="adc read_u16",e.I2CScan="i2c scan",e.I2CReadFromMem="i2c readfrom_mem",e.Input="input",e.Ticks_ms="ticks ms",e.BME280ReadTemperature="BME280 read_temperature",e.BME280ReadPressure="BME280 read_pressure",e.BME280ReadHumidity="BME280 read_humidity",e.VL53L0XRead="VL53L0X read",e.VEML6040ReadRGB="VEML6040 readRGB",e.MPU6050ReadAccel="MPU6050 read_accel",e.MPU6050ReadGyro="MPU6050 read_gyro",e))(M||{});const ne=2;var y=(e=>(e.I2CWriteToMem="i2c writefrom_mem",e.PinSetValue="pin set value",e.PinSetMode="pin set mode",e.PinSetPull="pin set pull",e.PwmFreq="pwm freq",e.PwmDutyU16="pwm duty_u16",e.Output="output",e.Sleep="sleep",e.DisplayText="display text",e.DisplayClear="display clear",e.NeoPixelWrite="neopixel write",e.RawOutput="raw output",e.BME280Init="BME280 __init__",e.VL53L0XInit="VL53L0X __init__",e.VEML6040Init="VEML6040 __init__",e.MPU6050Init="MPU6050 __init__",e.KeyboardInterrupt="keyboard interrupt",e.Error="error",e))(y||{}),V=(e=>(e.Finished="finished",e.Initialized="initialized",e.Timeout="timeout",e))(V||{});Object.values({...M,...y,...V});new Set(Object.values(M));new Set(Object.values(V));new Set(Object.values(y));const ke=`
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
`,Ve=`
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
`,qe=`
import sys, types
import mpbridge
import inspect

machine = types.ModuleType("machine")

def __getVarName(self):
    frame = inspect.currentframe().f_back
    local_names = [n for n, v in frame.f_locals.items() if v is self]
    global_names = [n for n, v in frame.f_globals.items() if v is self]
    names = local_names + global_names
    names = [name for name in names if name != 'self']
    if len(names) > 0 :
        return names[0]
    return None
mpbridge.getVarName = __getVarName
del __getVarName

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
        name = mpbridge.getVarName(self)
        mpbridge.pin_set_mode(self._id, int(mode), self.__class__.__name__, name)
        mpbridge.pin_set_pull(self._id, int(pull), self.__class__.__name__, name)
        if value is not None:
            mpbridge.pin_set_value(self._id, 1 if value else 0, self.__class__.__name__, name)

    def value(self, v=None):
        name = mpbridge.getVarName(self)
        if v is None:
            return mpbridge.pin_get_value(self._id, self.__class__.__name__, name)
        mpbridge.pin_set_value(self._id, 1 if v else 0, self.__class__.__name__, name)

    def on(self):
        self.value(1)

    def off(self):
        self.value(0)

    def toggle(self):
        state = self.value()
        self.value(0 if state else 1)
    def id(self):
        return self._id

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
def _patch():
    import mpbridge
    import BME280 as _bme
    mpbridge.original_BME280_init = _bme.BME280.__init__
    mpbridge.original_BME280_read_temperature = _bme.BME280.read_temperature
    mpbridge.original_BME280_read_pressure = _bme.BME280.read_pressure
    mpbridge.original_BME280_read_humidity = _bme.BME280.read_humidity
    mpbridge.original_BME280_read = getattr(_bme.BME280, "read", None)
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x76
        mpbridge.bme280_init(self.i2c.sda.id(), self.i2c.scl.id())
    def read_temperature(self):
        return mpbridge.bme280_read_temperature(self.i2c.sda.id(), self.i2c.scl.id())
    def read_pressure(self):
        return mpbridge.bme280_read_pressure(self.i2c.sda.id(), self.i2c.scl.id())
    def read_humidity(self):
        return mpbridge.bme280_read_humidity(self.i2c.sda.id(), self.i2c.scl.id())
    def read(self):
        t = read_temperature(self)
        p = read_pressure(self)
        h = read_humidity(self)
        return {"temperature": t, "pressure": p, "humidity": h}
    _bme.BME280.__init__ = init
    _bme.BME280.read_temperature = read_temperature
    _bme.BME280.read_pressure = read_pressure
    _bme.BME280.read_humidity = read_humidity
    _bme.BME280.read = read
_patch()
del _patch
`,je=`
def _restore():
    import mpbridge
    import BME280 as _bme
    _bme.BME280.__init__ = mpbridge.original_BME280_init
    _bme.BME280.read_temperature = mpbridge.original_BME280_read_temperature
    _bme.BME280.read_pressure = mpbridge.original_BME280_read_pressure
    _bme.BME280.read_humidity = mpbridge.original_BME280_read_humidity
    _bme.BME280.read = mpbridge.original_BME280_read
_restore()
del _restore
`,We=`
def _patch():
    import mpbridge
    import VL53L0X as _vlx
    mpbridge.original_VL53L0X_init = _vlx.VL53L0X.__init__
    mpbridge.original_VL53L0X_read = _vlx.VL53L0X.read
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x29
        mpbridge.vl53l0x_init(self.i2c.sda.id(), self.i2c.scl.id())
    def read(self):
        return mpbridge.vl53l0x_read(self.i2c.sda.id(), self.i2c.scl.id())
    _vlx.VL53L0X.__init__ = init
    _vlx.VL53L0X.read = read
_patch()
del _patch
`,$e=`
def _restore():
    import mpbridge
    import VL53L0X as _vlx

    _vlx.VL53L0X.__init__ = mpbridge.original_VL53L0X_init
    _vlx.VL53L0X.read = mpbridge.original_VL53L0X_read

_restore()
del _restore
`,Ge=`
def _patch():
    import mpbridge
    import VEML6040 as _veml
    mpbridge.original_VEML6040_init = _veml.VEML6040.__init__
    mpbridge.original_VEML6040_readRGB = _veml.VEML6040.readRGB
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x10
        mpbridge.veml6040_init(self.i2c.sda.id(), self.i2c.scl.id())
    def readRGB(self):
        r, g, b = mpbridge.veml6040_readRGB(self.i2c.sda.id(), self.i2c.scl.id())
        return (r, g, b)
    _veml.VEML6040.__init__ = init
    _veml.VEML6040.readRGB = readRGB
_patch()
del _patch
`,Ce=`
def _restore():
    import mpbridge
    import VEML6040 as _veml
    _veml.VEML6040.__init_ = mpbridge.original_VEML6040_init
    _veml.VEML6040.readRGB = mpbridge.original_VEML6040_readRGB
_restore()
del _restore
`,Xe=`
def _patch():
    import mpbridge
    import MPU6050 as _mpu
    mpbridge.original_MPU6050_init = _mpu.MPU6050.__init__
    mpbridge.original_MPU6050_read = _mpu.MPU6050.read
    mpbridge.original_MPU6050_read_accel = _mpu.MPU6050.read_accel
    mpbridge.original_MPU6050_read_gyro = _mpu.MPU6050.read_gyro
    def init(self, i2c):
        self.i2c = i2c
        self.address = 0x68
        mpbridge.mpu6050_init(self.i2c.sda.id(), self.i2c.scl.id())
    def read_gyro(self):
        result = mpbridge.mpu6050_read_gyro(self.i2c.sda.id(), self.i2c.scl.id())
        return (result[0], result[1], result[2])
    def read_accel(self):
        result = mpbridge.mpu6050_read_accel(self.i2c.sda.id(), self.i2c.scl.id())
        return (result[0], result[1], result[2])
    def read(self):
        accel = read_accel(self)
        gyro = read_gyro(self)
        return {"accel": accel, "gyro": gyro}
    _mpu.MPU6050.__init__ = init
    _mpu.MPU6050.read_gyro = read_gyro
    _mpu.MPU6050.read_accel = read_accel
    _mpu.MPU6050.read = read
_patch()
del _patch
`,ze=`
def _restore_mpu6050():
    import mpbridge
    import MPU6050 as _mpu
    _mpu.MPU6050.__init_ = mpbridge.original_MPU6050_init
    _mpu.MPU6050.read = mpbridge.original_MPU6050_read
    _mpu.MPU6050.read_accel = mpbridge.original_MPU6050_read_accel
    _mpu.MPU6050.read_gyro = mpbridge.original_MPU6050_read_gyro

_restore_mpu6050()
del _restore_mpu6050
`,He=`
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
`,Ye=`
import sys, types

mod = types.ModuleType('pibody.iot.WiFi')

class WiFi:
    def __init__(self):
        pass

mod.WiFi = WiFi
sys.modules['pibody.iot.WiFi'] = mod
`,Je=`
import sys, types

mod = types.ModuleType('pibody.iot.telegram_bot')

class TelegramBot:
    def __init__(self):
        pass

mod.TelegramBot = TelegramBot
sys.modules['pibody.iot.telegram_bot'] = mod
`,Qe=`
import sys, types
from SimRotaryEncoder import RotaryEncoder

mod = types.ModuleType('pibody.modules.RotaryEncoder')

mod.RotaryEncoder = RotaryEncoder
sys.modules['pibody.modules.RotaryEncoder'] = mod
`,Ke=`
import sys, types

mod = types.ModuleType('pibody.Demo.main')

class Demo:
    def __init__(self):
        pass

mod.Demo = Demo
sys.modules['pibody.Demo.main'] = mod
`,Ze=`
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
`,et=`
import builtins

def const(x):
    return x

builtins.const = const
`;var tt=Object.defineProperty,u=(e,t)=>tt(e,"name",{value:t,configurable:!0}),le=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function de(e){return!isNaN(parseFloat(e))&&isFinite(e)}u(de,"_isNumber");function x(e){return e.charAt(0).toUpperCase()+e.substring(1)}u(x,"_capitalize");function C(e){return function(){return this[e]}}u(C,"_getter");var U=["isConstructor","isEval","isNative","isToplevel"],O=["columnNumber","lineNumber"],F=["fileName","functionName","source"],rt=["args"],it=["evalOrigin"],T=U.concat(O,F,rt,it);function P(e){if(e)for(var t=0;t<T.length;t++)e[T[t]]!==void 0&&this["set"+x(T[t])](e[T[t]])}u(P,"StackFrame");P.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof P)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new P(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",a=this.getColumnNumber()||"",f=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+a+")":"[eval]:"+t+":"+a:f?f+" ("+e+":"+t+":"+a+")":e+":"+t+":"+a}};P.fromString=u(function(e){var t=e.indexOf("("),a=e.lastIndexOf(")"),f=e.substring(0,t),r=e.substring(t+1,a).split(","),n=e.substring(a+1);if(n.indexOf("@")===0)var l=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(n,""),c=l[1],m=l[2],p=l[3];return new P({functionName:f,args:r||void 0,fileName:c,lineNumber:m||void 0,columnNumber:p||void 0})},"StackFrame$$fromString");for(N=0;N<U.length;N++)P.prototype["get"+x(U[N])]=C(U[N]),P.prototype["set"+x(U[N])]=function(e){return function(t){this[e]=!!t}}(U[N]);var N;for(B=0;B<O.length;B++)P.prototype["get"+x(O[B])]=C(O[B]),P.prototype["set"+x(O[B])]=function(e){return function(t){if(!de(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(O[B]);var B;for(I=0;I<F.length;I++)P.prototype["get"+x(F[I])]=C(F[I]),P.prototype["set"+x(F[I])]=function(e){return function(t){this[e]=String(t)}}(F[I]);var I,X=P;function fe(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:u(function(a){if(a.stack&&a.stack.match(e))return this.parseV8OrIE(a);if(a.stack)return this.parseFFOrSafari(a);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:u(function(a){if(a.indexOf(":")===-1)return[a];var f=/(.+?)(?::(\d+))?(?::(\d+))?$/,r=f.exec(a.replace(/[()]/g,""));return[r[1],r[2]||void 0,r[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:u(function(a){var f=a.stack.split(`
`).filter(function(r){return!!r.match(e)},this);return f.map(function(r){r.indexOf("(eval ")>-1&&(r=r.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var n=r.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),l=n.match(/ (\(.+\)$)/);n=l?n.replace(l[0],""):n;var c=this.extractLocation(l?l[1]:n),m=l&&n||void 0,p=["eval","<anonymous>"].indexOf(c[0])>-1?void 0:c[0];return new X({functionName:m,fileName:p,lineNumber:c[1],columnNumber:c[2],source:r})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:u(function(a){var f=a.stack.split(`
`).filter(function(r){return!r.match(t)},this);return f.map(function(r){if(r.indexOf(" > eval")>-1&&(r=r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),r.indexOf("@")===-1&&r.indexOf(":")===-1)return new X({functionName:r});var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,l=r.match(n),c=l&&l[1]?l[1]:void 0,m=this.extractLocation(r.replace(n,""));return new X({functionName:c,fileName:m[0],lineNumber:m[1],columnNumber:m[2],source:r})},this)},"ErrorStackParser$$parseFFOrSafari")}}u(fe,"ErrorStackParser");var nt=new fe,st=nt,L=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,ce=L&&typeof K<"u"&&typeof K.exports<"u"&&typeof le<"u"&&typeof __dirname<"u",at=L&&!ce,ot=typeof Deno<"u",me=!L&&!ot,lt=me&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",dt=me&&typeof importScripts=="function"&&typeof self=="object";typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var ue,J,_e,se,ee;async function te(){if(!L||(ue=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,se=await import("./__vite-browser-external-9wXp6ZBx.js"),ee=await import("./__vite-browser-external-9wXp6ZBx.js"),_e=(await import("./__vite-browser-external-9wXp6ZBx.js")).default,J=await import("./__vite-browser-external-9wXp6ZBx.js"),re=J.sep,typeof le<"u"))return;let e=se,t=await import("./__vite-browser-external-9wXp6ZBx.js"),a=await import("./__vite-browser-external-9wXp6ZBx.js"),f=await import("./__vite-browser-external-9wXp6ZBx.js"),r={fs:e,crypto:t,ws:a,child_process:f};globalThis.require=function(n){return r[n]}}u(te,"initNodeModules");function pe(e,t){return J.resolve(t||".",e)}u(pe,"node_resolvePath");function ye(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}u(ye,"browser_resolvePath");var Q;L?Q=pe:Q=ye;var re;L||(re="/");function ge(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:ee.readFile(e).then(a=>new Uint8Array(a.buffer,a.byteOffset,a.byteLength))}}u(ge,"node_getBinaryResponse");function be(e,t){let a=new URL(e,location);return{response:fetch(a,t?{integrity:t}:{})}}u(be,"browser_getBinaryResponse");var G;L?G=ge:G=be;async function he(e,t){let{response:a,binary:f}=G(e,t);if(f)return f;let r=await a;if(!r.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await r.arrayBuffer())}u(he,"loadBinaryFile");var $;if(lt)$=u(async e=>await import(e),"loadScript");else if(dt)$=u(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(L)$=we;else throw new Error("Cannot determine runtime environment");async function we(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?_e.runInThisContext(await(await fetch(e)).text()):await import(ue.pathToFileURL(e).href)}u(we,"nodeLoadScript");async function Ee(e){if(L){await te();let t=await ee.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}u(Ee,"loadLockFile");async function ve(){if(ce)return __dirname;let e;try{throw new Error}catch(f){e=f}let t=st.parse(e)[0].fileName;if(L&&!t.startsWith("file://")&&(t=`file://${t}`),at){let f=await import("./__vite-browser-external-9wXp6ZBx.js");return(await import("./__vite-browser-external-9wXp6ZBx.js")).fileURLToPath(f.dirname(t))}let a=t.lastIndexOf(re);if(a===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,a)}u(ve,"calculateDirname");function Me(e){let t=e.FS,a=e.FS.filesystems.MEMFS,f=e.PATH,r={DIR_MODE:16895,FILE_MODE:33279,mount:function(n){if(!n.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return a.mount.apply(null,arguments)},syncfs:async(n,l,c)=>{try{let m=r.getLocalSet(n),p=await r.getRemoteSet(n),h=l?p:m,v=l?m:p;await r.reconcile(n,h,v),c(null)}catch(m){c(m)}},getLocalSet:n=>{let l=Object.create(null);function c(h){return h!=="."&&h!==".."}u(c,"isRealDir");function m(h){return v=>f.join2(h,v)}u(m,"toAbsolute");let p=t.readdir(n.mountpoint).filter(c).map(m(n.mountpoint));for(;p.length;){let h=p.pop(),v=t.stat(h);t.isDir(v.mode)&&p.push.apply(p,t.readdir(h).filter(c).map(m(h))),l[h]={timestamp:v.mtime,mode:v.mode}}return{type:"local",entries:l}},getRemoteSet:async n=>{let l=Object.create(null),c=await ft(n.opts.fileSystemHandle);for(let[m,p]of c)m!=="."&&(l[f.join2(n.mountpoint,m)]={timestamp:p.kind==="file"?(await p.getFile()).lastModifiedDate:new Date,mode:p.kind==="file"?r.FILE_MODE:r.DIR_MODE});return{type:"remote",entries:l,handles:c}},loadLocalEntry:n=>{let l=t.lookupPath(n).node,c=t.stat(n);if(t.isDir(c.mode))return{timestamp:c.mtime,mode:c.mode};if(t.isFile(c.mode))return l.contents=a.getFileDataAsTypedArray(l),{timestamp:c.mtime,mode:c.mode,contents:l.contents};throw new Error("node type not supported")},storeLocalEntry:(n,l)=>{if(t.isDir(l.mode))t.mkdirTree(n,l.mode);else if(t.isFile(l.mode))t.writeFile(n,l.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(n,l.mode),t.utime(n,l.timestamp,l.timestamp)},removeLocalEntry:n=>{var l=t.stat(n);t.isDir(l.mode)?t.rmdir(n):t.isFile(l.mode)&&t.unlink(n)},loadRemoteEntry:async n=>{if(n.kind==="file"){let l=await n.getFile();return{contents:new Uint8Array(await l.arrayBuffer()),mode:r.FILE_MODE,timestamp:l.lastModifiedDate}}else{if(n.kind==="directory")return{mode:r.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+n.kind)}},storeRemoteEntry:async(n,l,c)=>{let m=n.get(f.dirname(l)),p=t.isFile(c.mode)?await m.getFileHandle(f.basename(l),{create:!0}):await m.getDirectoryHandle(f.basename(l),{create:!0});if(p.kind==="file"){let h=await p.createWritable();await h.write(c.contents),await h.close()}n.set(l,p)},removeRemoteEntry:async(n,l)=>{await n.get(f.dirname(l)).removeEntry(f.basename(l)),n.delete(l)},reconcile:async(n,l,c)=>{let m=0,p=[];Object.keys(l.entries).forEach(function(w){let i=l.entries[w],o=c.entries[w];(!o||t.isFile(i.mode)&&i.timestamp.getTime()>o.timestamp.getTime())&&(p.push(w),m++)}),p.sort();let h=[];if(Object.keys(c.entries).forEach(function(w){l.entries[w]||(h.push(w),m++)}),h.sort().reverse(),!m)return;let v=l.type==="remote"?l.handles:c.handles;for(let w of p){let i=f.normalize(w.replace(n.mountpoint,"/")).substring(1);if(c.type==="local"){let o=v.get(i),d=await r.loadRemoteEntry(o);r.storeLocalEntry(w,d)}else{let o=r.loadLocalEntry(w);await r.storeRemoteEntry(v,i,o)}}for(let w of h)if(c.type==="local")r.removeLocalEntry(w);else{let i=f.normalize(w.replace(n.mountpoint,"/")).substring(1);await r.removeRemoteEntry(v,i)}}};e.FS.filesystems.NATIVEFS_ASYNC=r}u(Me,"initializeNativeFS");var ft=u(async e=>{let t=[];async function a(r){for await(let n of r.values())t.push(n),n.kind==="directory"&&await a(n)}u(a,"collect"),await a(e);let f=new Map;f.set(".",e);for(let r of t){let n=(await e.resolve(r)).join("/");f.set(n,r)}return f},"getFsHandles");function Pe(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Be(e),quit(a,f){throw t.exited={status:a,toThrow:f},f},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:a=>e.indexURL+a,instantiateWasm:Ie(e.indexURL)};return t}u(Pe,"createSettings");function Le(e){return function(t){let a="/";try{t.FS.mkdirTree(e)}catch(f){console.error(`Error occurred while making a home directory '${e}':`),console.error(f),console.error(`Using '${a}' for a home directory instead`),e=a}t.FS.chdir(e)}}u(Le,"createHomeDirectory");function Se(e){return function(t){Object.assign(t.ENV,e)}}u(Se,"setEnvironment");function xe(e){return t=>{for(let a of e)t.FS.mkdirTree(a),t.FS.mount(t.FS.filesystems.NODEFS,{root:a},a)}}u(xe,"mountLocalDirectories");function Ne(e){let t=he(e);return a=>{let f=a._py_version_major(),r=a._py_version_minor();a.FS.mkdirTree("/lib"),a.FS.mkdirTree(`/lib/python${f}.${r}/site-packages`),a.addRunDependency("install-stdlib"),t.then(n=>{a.FS.writeFile(`/lib/python${f}${r}.zip`,n)}).catch(n=>{console.error("Error occurred while installing the standard library:"),console.error(n)}).finally(()=>{a.removeRunDependency("install-stdlib")})}}u(Ne,"installStdlib");function Be(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Ne(t),Le(e.env.HOME),Se(e.env),xe(e._node_mounts),Me]}u(Be,"getFileSystemInitializationFuncs");function Ie(e){if(typeof WasmOffsetConverter<"u")return;let{binary:t,response:a}=G(e+"pyodide.asm.wasm");return function(f,r){return async function(){try{let n;a?n=await WebAssembly.instantiateStreaming(a,f):n=await WebAssembly.instantiate(await t,f);let{instance:l,module:c}=n;r(l,c)}catch(n){console.warn("wasm instantiation failed!"),console.warn(n)}}(),{}}}u(Ie,"getInstantiateWasmFunc");var ae="0.27.2";async function Ae(e={}){var t,a;await te();let f=e.indexURL||await ve();f=Q(f),f.endsWith("/")||(f+="/"),e.indexURL=f;let r={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:f+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:f,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"f88dc4abb40ec8e780c94a5f70bcef45ec9eb3c1aee1c99da527febfef1c6f3f"},n=Object.assign(r,e);(t=n.env).HOME??(t.HOME="/home/pyodide"),(a=n.env).PYTHONINSPECT??(a.PYTHONINSPECT="1");let l=Pe(n),c=l.API;if(c.lockFilePromise=Ee(n.lockFileURL),typeof _createPyodideModule!="function"){let w=`${n.indexURL}pyodide.asm.js`;await $(w)}let m;if(e._loadSnapshot){let w=await e._loadSnapshot;ArrayBuffer.isView(w)?m=w:m=new Uint8Array(w),l.noInitialRun=!0,l.INITIAL_MEMORY=m.length}let p=await _createPyodideModule(l);if(l.exited)throw l.exited.toThrow;if(e.pyproxyToStringRepr&&c.setPyProxyToStringMethod(!0),c.version!==ae&&n.checkAPIVersion)throw new Error(`Pyodide version does not match: '${ae}' <==> '${c.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);p.locateFile=w=>{throw new Error("Didn't expect to load any more file_packager files!")};let h;m&&(h=c.restoreSnapshot(m));let v=c.finalizeBootstrap(h,e._snapshotDeserializer);return c.sys.path.insert(0,c.config.env.HOME),v.version.includes("dev")||c.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${v.version}/full/`),c._pyodide.set_excepthook(),await c.packageIndexReady,c.initializeStreams(n.stdin,n.stdout,n.stderr),v}u(Ae,"loadPyodide");const ct=new SharedArrayBuffer(16),q=new Int32Array(ct),mt=new SharedArrayBuffer(2),k=new Uint8Array(mt),Re="user_code.py";function b(e){Atomics.store(q,0,0);let t=Ue.currentframe().f_back,a;for(;t;){if(t.f_code.co_filename==Re){a=t.f_lineno;break}t=t.f_back}postMessage({content:e,line:a}),Atomics.wait(q,0,0)}function S(e){Atomics.store(q,0,0),postMessage({content:e,line:-1}),Atomics.wait(q,0,0)}function R(e){postMessage({content:e,line:-1})}function ut(e,t){return e+t}function _t(e,t){return e-t}async function pt(){return await fetch(oe+"manifest.json").then(t=>t.json()).catch(()=>{})}function z(e,t,a){const f=`
import sys
import os

file_path = "/home/pyodide/${t}.py"
if os.path.exists(file_path):
    os.remove(file_path)

sys.modules.pop("${t}", None)
`;e.runPython(f),e.registerJsModule(t,a)}let Ue,H=!1,j=!1;(async()=>{function e(){if(S({command:y.Output,request:{output:"> "}}),H){let d="",s=0;const E=new SharedArrayBuffer(256),_=new Uint8Array(E);for(S({command:M.Input,request:{},result:_});;){const g=Atomics.load(_,s);if(g==10)break;d+=String.fromCharCode(g),s++}return S({command:y.RawOutput,request:{output:d+`
\r`}}),d}const i=new Uint8Array(new SharedArrayBuffer(4));let o="";for(;;){S({command:M.Input,request:{},result:i});const d=new Int32Array(i.buffer)[0],s=String.fromCodePoint(d);if(d===10){S({command:y.Output,request:{output:s}});break}else d===8?o.length>0&&(S({command:y.Output,request:{output:s}}),o=o.substring(0,o.length-1)):(S({command:y.Output,request:{output:s}}),o+=s);r.checkInterrupt()}return o}const t=Ae({stdout:i=>S({command:y.Output,request:{output:i+`
\r`}}),stdin:e}),a=(async()=>{const i=await pt(),o=Object.entries(i).map(async([s,E])=>{if(E)try{if(!s.includes("RotaryEncoder.py")){if(!s.includes("Display.py")){if(!s.includes("iot/")){if(!s.includes("Demo/")){const g=await(await fetch(oe+s)).text();return["pibody/"+s,g]}}}}}catch{return null}}),d=await Promise.all(o);return new Map(d.filter(s=>!!s))})(),f=(async()=>{const i=["BME280.py","MPU6050.py","LSM6DS3.py","VEML6040.py","VL53L0X.py","SSD1306.py","SimRotaryEncoder.py"];return(await Promise.all(i.map(async d=>{try{const s=await fetch(De+d);if(!s.ok)throw new Error(`Failed to fetch ${d}`);const E=await s.text();return[d,E]}catch(s){return console.error(s),null}}))).filter(d=>d!==null)})(),[r,n,l]=await Promise.all([t,a,f]);Ue=r.pyimport("inspect");const c=[...n,...l];for(const[i,o]of c){const d=`/home/pyodide/${i}`;try{r.FS.mkdirTree(d.replace(/\/[^/]+$/,"")),r.FS.writeFile(d,o)}catch(s){console.error("Error writing file to Pyodide FS:",i,s)}}const m=new Int32Array(new SharedArrayBuffer(4)),p={sleep:i=>{const o=i*1e3;p.sleep_ms(o)},sleep_ms:i=>{if(b({command:y.Sleep,request:{time_ms:i}}),H)return;const d=performance.now()+i,s=Math.min(i/20,50);for(;performance.now()<d;){const E=d-performance.now();Atomics.wait(m,0,0,Math.min(s,E)),r.checkInterrupt()}},sleep_us:i=>{p.sleep_ms(i/1e3)},ticks_ms:()=>performance.now(),ticks_us:()=>performance.now()*1e3,ticks_add:ut,ticks_diff:_t,time:()=>Date.now(),time_ns:()=>performance.now()*1e3*1e3},h={print(...i){let o=" ",d=`
\r`;i.length>0&&i[i.length-1]!==null&&typeof i[i.length-1]=="object"&&("sep"in i[i.length-1]||"end"in i[i.length-1])&&({sep:o=o,end:d=d}=i.pop());const s=i.map(String).join(o)+d;b({command:y.Output,request:{output:s}})}},v={print:i=>{b({command:y.DisplayText,request:{text:i,x:0,y:16}})},clear:()=>{b({command:y.DisplayClear,request:{}})}},w={Mode_IN:Y.IN,Mode_OUT:Y.OUT,Pull_NONE:W.NONE,Pull_UP:W.UP,Pull_DOWN:W.DOWN,pin_set_mode(i,o,d,s){b({command:y.PinSetMode,request:{pin:i,mode:o},meta:{className:d,varName:s}})},pin_set_pull(i,o,d,s){b({command:y.PinSetPull,request:{pin:i,pull:o},meta:{className:d,varName:s}})},pin_set_value(i,o,d,s){b({command:y.PinSetValue,request:{pin:i,value:o},meta:{className:d,varName:s}})},pin_get_value(i,o,d){const s=new Int8Array(new SharedArrayBuffer(4));return b({command:M.PinGetValue,request:{pin:i},meta:{className:o,varName:d},result:s}),Atomics.load(s,0)},pwm_freq(i,o){b({command:y.PwmFreq,request:{pin:i,freq:o}})},pwm_duty_u16(i,o){b({command:y.PwmDutyU16,request:{pin:i,duty_u16:o}})},adc_read_u16(i){const o=new Uint16Array(new SharedArrayBuffer(2));return b({command:M.AdcReadU16,request:{pin:i},result:o}),Atomics.load(o,0)},neopixel_write(i,o){function d(_){if(_&&typeof _=="object"){if(Array.isArray(_))return _.map(g=>Number(g));if(typeof _.toJs=="function")try{const g=_.toJs({create_proxies:!1});return d(g)}catch{}if(typeof _[Symbol.iterator]=="function")return Array.from(_,g=>Number(g))}return[]}function s(_){let g;if(Array.isArray(_))g=_;else if(_&&typeof _.toJs=="function")try{const A=_.toJs({create_proxies:!1});return s(A)}catch{g=[]}else _&&typeof _[Symbol.iterator]=="function"?g=Array.from(_):g=[];return g.map(A=>d(A))}const E=s(o);S({command:y.NeoPixelWrite,request:{pin:i,pixels:E}})},i2c_readfrom_mem(i,o,d,s,E){const _=new SharedArrayBuffer(1+E),g=new Uint8Array(_);return b({command:M.I2CReadFromMem,request:{sda:i,scl:o,addr:d,memaddr:s,nbytes:E},result:g}),Array.from(g)},i2c_writeto_mem(i,o,d,s,E){const _=E instanceof Uint8Array?new Uint8Array(E):new Uint8Array(E);b({command:y.I2CWriteToMem,request:{sda:i,scl:o,addr:d,memaddr:s,buf:_}})},i2c_scan(i,o){const d=new SharedArrayBuffer(4),s=new Int32Array(d);b({command:M.I2CScan,request:{sda:i,scl:o},result:s});const E=Atomics.load(s,0);return E<0?[]:[E]},bme280_init(i,o){b({command:y.BME280Init,request:{sda:i,scl:o}})},bme280_read_temperature(i,o){const d=new SharedArrayBuffer(8),s=new Int32Array(d);return b({command:M.BME280ReadTemperature,request:{sda:i,scl:o},result:s}),s[0]},bme280_read_pressure(i,o){const d=new SharedArrayBuffer(8),s=new Int32Array(d);return b({command:M.BME280ReadPressure,request:{sda:i,scl:o},result:s}),s[0]},bme280_read_humidity(i,o){const d=new SharedArrayBuffer(8),s=new Int32Array(d);return b({command:M.BME280ReadHumidity,request:{sda:i,scl:o},result:s}),s[0]},vl53l0x_init(i,o){b({command:y.VL53L0XInit,request:{sda:i,scl:o}})},vl53l0x_read(i,o){const d=new SharedArrayBuffer(8),s=new Int32Array(d);return b({command:M.VL53L0XRead,request:{sda:i,scl:o},result:s}),console.log(s[0]),s[0]},veml6040_init(i,o){b({command:y.VEML6040Init,request:{sda:i,scl:o}})},veml6040_readRGB(i,o){const d=new SharedArrayBuffer(16),s=new Int32Array(d);return b({command:M.VEML6040ReadRGB,request:{sda:i,scl:o},result:s}),[s[0],s[1],s[2]]},mpu6050_init(i,o){b({command:y.MPU6050Init,request:{sda:i,scl:o}})},mpu6050_read_accel(i,o){const d=new SharedArrayBuffer(16),s=new Int32Array(d);return b({command:M.MPU6050ReadAccel,request:{sda:i,scl:o},result:s}),[s[0]/16384,s[1]/16384,s[2]/16384]},mpu6050_read_gyro(i,o){const d=new SharedArrayBuffer(16),s=new Int32Array(d);return b({command:M.MPU6050ReadGyro,request:{sda:i,scl:o},result:s}),[s[0]/131,s[1]/131,s[2]/131]}};z(r,"utime",p),z(r,"display",v),z(r,"mpbridge",w),r.globals.set("print",h.print),r.runPython(Ze),r.runPython(et),r.runPython(ke),r.runPython(qe),r.runPython(He),r.runPython(Ve),r.runPython(Ye),r.runPython(Je),r.runPython(Qe),r.runPython(Ke),r.setInterruptBuffer(k),self.onmessage=i=>{const{command:o,code:d,isReplay:s,isRecord:E}=i.data;if(o==="runPython"){if(!r){R({command:y.Error,request:{message:"Interpreter not initialized"}});return}try{H=s,s||E?j||(r.runPython(Te),r.runPython(We),r.runPython(Ge),r.runPython(Xe),j=!0):j&&(r.runPython(ze),r.runPython(Ce),r.runPython($e),r.runPython(je),j=!1),r.runPython(d,{filename:Re}),R({command:V.Finished,request:{}})}catch(_){let g="";if(k[0]!==ne&&k[1]===ne)k[1]=0,R({command:y.KeyboardInterrupt,request:{message:`KeyboardInterrupt
\r`}});else if(_ instanceof Error){const A=_.message.split(`
`),ie=A.findIndex(D=>D.includes("<exec>"));ie!==-1?g=A.slice(ie).filter(D=>!D.includes("mpWorker.ts")&&!/mpWorker-[A-Za-z0-9]+\.js/.test(D)&&!D.includes("pyodide.asm.js")).join(`
`):g=_.message,R({command:y.Error,request:{message:g}})}else g=String(_),R({command:y.Error,request:{message:g}})}}},R({command:V.Initialized,request:{sharedArrayInterrupt:k,sharedWakeupArray:q}})})()});export default yt();
