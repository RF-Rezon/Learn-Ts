{
    var Device = /** @class */ (function () {
        function Device(name, work, color, brand) {
            this.name = name;
            this.work = work;
            this.color = color;
            this.brand = brand;
        }
        Device.prototype.about = function () {
            console.log("This is a ".concat(this.name, ". It does ").concat(this.work, ". It is ").concat(this.color, " colored, and ").concat(this.brand, " branded."));
        };
        return Device;
    }());
    var mobile = new Device("Mobile", "Connect people", "black", "Sumsang");
    console.log(mobile.brand);
    mobile.about();
}
