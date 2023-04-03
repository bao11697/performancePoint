const expect = require('chai').expect;
const path = require('path');
const { interfaces } = require('mocha');
const calculatePoint = require('../caculatorPoint');
const Detects = require('../Modules').DamagePoint

let key = 'detected_damages';
let groups = ['BODY', 'GLASS', 'PART', 'WHEEL', 'TIRE'];
let actions = ['inspector', 'qa'];
let grade_scores = [1, 2, 3, 4];
// let grade_scores = [1,2,3,9];
let critials = [true, false];
let plusPoint = 1;
var expected = 1;
let Test_cases = [];

groups.forEach((group) => {
    actions.forEach((action) => {
        grade_scores.forEach((score) => {
            critials.forEach((critial) => {
                if (critial === true) {
                    plusPoint = 3;
                    if (group === 'BODY') {
                        switch (score) {
                            case 3:
                                {
                                    expected = plusPoint * 5;
                                    var cases = new Detects(
                                        key,
                                        group,
                                        action,
                                        score,
                                        expected,
                                        critial,
                                    );
                                    Test_cases.push(cases);
                                }
                                break;
                            case 4:
                                {
                                    expected = plusPoint * 6;
                                    var cases = new Detects(
                                        key,
                                        group,
                                        action,
                                        score,
                                        expected,
                                        critial,
                                    );
                                    Test_cases.push(cases);
                                }
                                break;
                            default:
                                {
                                    expected = plusPoint * score;
                                    var cases = new Detects(
                                        key,
                                        group,
                                        action,
                                        score,
                                        expected,
                                        critial,
                                    );
                                    Test_cases.push(cases);
                                }
                                break;
                        }
                    } else {
                        expected = plusPoint * score;
                        var cases = new Detects(
                            key,
                            group,
                            action,
                            score,
                            expected,
                            critial,
                        );
                        Test_cases.push(cases);
                    }
                } else {
                    plusPoint = 1;
                    if (group === 'BODY') {
                        switch (score) {
                            case 3:
                                {
                                    expected = plusPoint * 5;
                                    var cases = new Detects(
                                        key,
                                        group,
                                        action,
                                        score,
                                        expected,
                                        critial,
                                    );
                                    Test_cases.push(cases);
                                }
                                break;
                            case 4:
                                {
                                    expected = plusPoint * 6;
                                    var cases = new Detects(
                                        key,
                                        group,
                                        action,
                                        score,
                                        expected,
                                        critial,
                                    );
                                    Test_cases.push(cases);
                                }
                                break;
                            default:
                                {
                                    expected = plusPoint * score;
                                    var cases = new Detects(
                                        key,
                                        group,
                                        action,
                                        score,
                                        expected,
                                        critial,
                                    );
                                    Test_cases.push(cases);
                                }
                                break;
                        }
                    } else {
                        expected = plusPoint * score;
                        var cases = new Detects(
                            key,
                            group,
                            action,
                            score,
                            expected,
                            critial
                        );
                        Test_cases.push(cases);
                    }
                }
            });
        });
    });
});

const fs = require('fs');

describe(' Check Performace with detected_damages', function () {

    const filename = 'PerformanceDetect.txt';
    const outputFilePath = path.resolve(__dirname, 'Report', filename);

        Test_cases.forEach((test) => {
            it('Check Performance Point = '+test.expected+': Detail : Damage_group: ' +test.damage_group +
                    ', grade_score = ' +test.grade_score +', Action by: '+test.action+', Critial : '+test.critical,
                function (done) { 
                    expect(calculatePoint(test.key, test)).to.equal(test.expected,)
                    const result = performTest(test);
                    const output = `${this.test.fullTitle()}: ${result}\n`;
                    fs.appendFileSync(outputFilePath, output);
                    done();
                }
            ); 
     });
  

});

function performTest(input) {
    // test code
    return 'PASS';
  }

