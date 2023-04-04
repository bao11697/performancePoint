
function DamagePoint(key,group,action,score,expected,critical){
    this.key = key;
    this.damage_group = group;
    this.action = action;
    this.grade_score = score;
    this.expected = expected;
    if (critical) {
        this.critical = critical;
    }  
}

function Data(key,name,action,expected,critical){
        if((key)&& ((key=== 'messageData') || (key === 'inspectData'))) {
            this.key = key
            this.name = name
            this.action = action
            this.expected = expected
            if(critical){
                    this.critical = critical
                }

        }
}

function performTest(input) {
    return (input ?   '=> TEST CASE PASS' : '=> NOT VALUE' )
   
}

module.exports = {
    DamagePoint,
    Data,
    performTest
  }






