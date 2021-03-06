const packageFile = require("../package.json");

const CommonDevice = require('./CommonDevice');
const CommonNode = require('./CommonNode');

module.exports = function(RED) {

    class MiYeelightColorLedStripDevice extends CommonDevice {
        constructor(config) {
            super(RED, config);
        }
        
        getAttributeList() {
            return ["power", "bright", "ct", "rgb", "sat"];
        }
        
        getAttributeSetter() {
            return {
                "power": "set_power",
                "bright": "set_bright",
                "rgb": "set_rgb"
            };
        }
    };
    RED.nodes.registerType("Mi-YeelightColorLedStrip-Device", MiYeelightColorLedStripDevice);
    
    class MiMiIntelligencePinboard extends CommonNode {
        constructor(config) {
            super(RED, config);
        }
    }
    RED.nodes.registerType("Mi-YeelightColorLedStrip", MiMiIntelligencePinboard);
}
