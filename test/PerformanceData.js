const expect = require('chai').expect;
const path = require('path');
const { interfaces } = require('mocha');
const calculatePoint = require('../caculatorPoint');
const Datas = require('../Modules').Data
const performTest = require('../Modules').performTest



let keys = ['messageData','inspectData'];
let names = [ 'vin','plate_decode','make','model','year','body_type','trans','int_status','int_id','trim_id',
'plate_number','odom_unit','odom_reading','qc_odom','qc_tire','qc_glass','qc_interior',
'ext_id','qc','qc_vin','qc_plate']
let actions = ['inspector', 'qa']
let criticals = [true, false];
let plusPoint = 1;
var expected = 1;
let Test_cases = [];

keys.forEach(key => {
   
    actions.forEach(action=> {
        criticals.forEach(critical=>{
            names.forEach(name=> {
            
                plusPoint = 1
                if (critical===true) {
                    plusPoint = 3;
                }
                switch (name) {
                    case 'vin':
                        if (action === 'inspector') {
                            expected =  40 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  80 * plusPoint;
                        }
                        break;
                    case 'plate_decode':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                        break;
                    case 'make':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                        break;
                    case 'model':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                        break;
                    case 'year':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                        break;
                    case 'body_type':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  30 * plusPoint;
                        }
                        break;
                    case 'trans':
                        if (action === 'inspector') {
                            expected =  20 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  40 * plusPoint;
                        }
                        break;
                    case 'int_status':
                        if (action === 'inspector') {
                            expected =  5 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  10 * plusPoint;
                        }
                        break;
                    case 'int_id':
                        if (action === 'inspector') {
                            expected =  5 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  10 * plusPoint;
                        }
                        break;
                    case 'trim_id':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                    case 'plate_number':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                        break;
                    case 'odom_unit':
                        if (action === 'inspector') {
                            expected =  40 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  40 * plusPoint;
                        }
                        break;
                    case 'odom_reading':
                        if (action === 'inspector') {
                            expected =  40 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  40 * plusPoint;
                        }
                        break;
                    case 'qc_odom':
                        if (action === 'inspector') {
                            expected =  40 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  40 * plusPoint;
                        }
                        break;
                    case 'qc_tire':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  30 * plusPoint;
                        }
                        break;
                    case 'qc_glass':
                        if (action === 'inspector') {
                            expected =  20 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  40 * plusPoint;
                        }
                        break;
                    case 'qc_interior':
                        if (action === 'inspector') {
                            expected =  20 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  40 * plusPoint;
                        }
                        break;
                    case 'ext_id':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  20 * plusPoint;
                        }
                        break;
                    case 'qc':
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  30 * plusPoint;
                        }
                        break;
                    case 'qc_vin':
                        if (action === 'inspector') {
                            expected =  40 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  80 * plusPoint;
                        }
                        break;
                    case 'qc_plate':
                        if (action === 'inspector') {
                            expected =  40 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  80 * plusPoint;
                        }
                        break;
                    default:
                        if (action === 'inspector') {
                            expected =  10 * plusPoint;
                        }
                        if (action === 'qa') {
                            expected =  10 * plusPoint;
                        }
                        break;
                }
                var cases = new Datas(
                    key,
                    name,
                    action,
                    expected,
                    critical
                );
     
                Test_cases.push(cases);
            })

        })
    })
});

const fs = require('fs');
const filename = 'PerformanceData.txt';
const outputFilePath = path.resolve(__dirname, 'Report', filename);

Test_cases.forEach((test) => {
    
        describe(' Check Performace with '+test.key, function () {
            it(
                'Check Performance Point = '+test.expected+': Detail : Task: ' +test.name +' , Action by: '+test.action+', Critical : '+test.critical,
                function (done) {
                    expect(calculatePoint(test.key, test)).to.equal(test.expected);
                    const result = performTest(test);
                    const output = `${this.test.fullTitle()}: ${result}\n`;
                    fs.appendFileSync(outputFilePath, output);
                    done();
                }
            );
        
    });
});

    
  



