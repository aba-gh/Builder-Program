function Decoder(payload, port) {
    if(payload[0] === 0x01) {
        return [
            {
                field: "TEMPERATURE",
                value: (payload[1] << 8 | payload[2]) / 100
            },
            {
                field: "HUMIDITY",
                value: (payload[3] << 8 | + payload[4]) / 100
            },
            {
                field: "PRESSURE",
                value: (payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)) / 100
            },
            {
                field: "GAS",
                value: payload[12] | (payload[11] << 8) | (payload[10] << 16) | (payload[9] << 24)
            },
            {
                field: "COUNTER",
                value: payload[16] | (payload[15] << 8) | (payload[14] << 16) | (payload[13] << 24)
            }
        ];
    }
    if(payload[0] === 0x02) {
        return [
            {
                field: "TEMPERATURE",
                value: (payload[1] << 8 | payload[2]) / 100
            },
            {
                field: "HUMIDITY",
                value: (payload[3] << 8 | + payload[4]) / 100
            },
            {
                field: "COUNTER",
                value: payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)
            }
        ];
    }
    if(payload[0] === 0x03) {
        return [
            {
                field: "LIGHT",
                value: (payload[4] | (payload[3] << 8) | (payload[2] << 16) | (payload[1] << 24)) / 100
            },
            {
                field: "COUNTER",
                value: payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)
            }
        ];
    }
    if(payload[0] === 0x04) {
        return [
            {
                field: "COUNTER",
                value: payload[4] | (payload[3] << 8) | (payload[2] << 16) | (payload[1] << 24)
            }
        ];
    }
if(payload[0] === 0x05) {
        return [
            {
                field: "TEMPERATURE",
                value: (payload[1] << 8 | payload[2]) / 100 * (9/5) + 32
            },
            {
                field: "HUMIDITY",
                value: (payload[3] << 8 | + payload[4]) / 100
            },
            {
                field: "PRESSURE",
                value: (payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)) / 100
            },
            {
                field: "GAS",
                value: payload[12] | (payload[11] << 8) | (payload[10] << 16) | (payload[9] << 24)
            },
            {
                field: "WIND",
                value: payload[14] | (payload[13] << 8)
            },
            {
                field: "COUNTER",
                value: payload[16] | (payload[15] << 8) | (payload[14] << 16) | (payload[13] << 24)
            }
        ];
    }
    
}

