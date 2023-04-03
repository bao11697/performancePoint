const calculatePoint = (key, element) => {
    let point = 0;
    let plusPoint = 1;
    const action = element.action ? element.action : 'inspector';
    if (element.critical) {
        plusPoint = 3;
    }
    if (key === 'detected_damages') {
        if (['BODY'].includes(element.damage_group)) {
            switch (element.grade_score) {
                case 1:
                    if (action === 'inspector') {
                        point = 1 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 1 * plusPoint;
                    }
                    break;
                case 2:
                    if (action === 'inspector') {
                        point = 2 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 2 * plusPoint;
                    }
                    break;
                case 3:
                    if (action === 'inspector') {
                        point = 5 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 5 * plusPoint;
                    }
                    break;
                case 4:
                    if (action === 'inspector') {
                        point = 6 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 6 * plusPoint;
                    }
                    break;
                default:
                    break;
            }
        }
        if (['GLASS', 'PART', 'WHEEL', 'TIRE'].includes(element.damage_group)) {
            switch (element.grade_score) {
                case 1:
                    if (action === 'inspector') {
                        point = 1 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 1 * plusPoint;
                    }
                    break;
                case 2:
                    if (action === 'inspector') {
                        point = 2 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 2 * plusPoint;
                    }
                    break;
                case 3:
                    if (action === 'inspector') {
                        point = 3 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 3 * plusPoint;
                    }
                    break;
                case 4:
                    if (action === 'inspector') {
                        point = 4 * plusPoint;
                    }
                    if (action === 'qa') {
                        point = 4 * plusPoint;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    if (['messageData', 'inspectData'].includes(key)) {
        const name = element.name ? element.name : '';
        let plusPoint = 1;
        if (element.critical) {
            plusPoint = 3;
        }
        switch (name) {
            case 'vin':
                if (action === 'inspector') {
                    point = 40 * plusPoint;
                }
                if (action === 'qa') {
                    point = 80 * plusPoint;
                }
                break;
            case 'plate_decode':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
                break;
            case 'make':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
                break;
            case 'model':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
                break;
            case 'year':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
                break;
            case 'body_type':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 30 * plusPoint;
                }
                break;
            case 'trans':
                if (action === 'inspector') {
                    point = 20 * plusPoint;
                }
                if (action === 'qa') {
                    point = 40 * plusPoint;
                }
                break;
            case 'int_status':
                if (action === 'inspector') {
                    point = 5 * plusPoint;
                }
                if (action === 'qa') {
                    point = 10 * plusPoint;
                }
                break;
            case 'int_id':
                if (action === 'inspector') {
                    point = 5 * plusPoint;
                }
                if (action === 'qa') {
                    point = 10 * plusPoint;
                }
                break;
            case 'trim_id':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
            case 'plate_number':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
                break;
            case 'odom_unit':
                if (action === 'inspector') {
                    point = 40 * plusPoint;
                }
                if (action === 'qa') {
                    point = 40 * plusPoint;
                }
                break;
            case 'odom_reading':
                if (action === 'inspector') {
                    point = 40 * plusPoint;
                }
                if (action === 'qa') {
                    point = 40 * plusPoint;
                }
                break;
            case 'qc_odom':
                if (action === 'inspector') {
                    point = 40 * plusPoint;
                }
                if (action === 'qa') {
                    point = 40 * plusPoint;
                }
                break;
            case 'qc_tire':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 30 * plusPoint;
                }
                break;
            case 'qc_glass':
                if (action === 'inspector') {
                    point = 20 * plusPoint;
                }
                if (action === 'qa') {
                    point = 40 * plusPoint;
                }
                break;
            case 'qc_interior':
                if (action === 'inspector') {
                    point = 20 * plusPoint;
                }
                if (action === 'qa') {
                    point = 40 * plusPoint;
                }
                break;
            case 'ext_id':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 20 * plusPoint;
                }
                break;
            case 'qc':
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 30 * plusPoint;
                }
                break;
            case 'qc_vin':
                if (action === 'inspector') {
                    point = 40 * plusPoint;
                }
                if (action === 'qa') {
                    point = 80 * plusPoint;
                }
                break;
            case 'qc_plate':
                if (action === 'inspector') {
                    point = 40 * plusPoint;
                }
                if (action === 'qa') {
                    point = 80 * plusPoint;
                }
                break;
            default:
                if (action === 'inspector') {
                    point = 10 * plusPoint;
                }
                if (action === 'qa') {
                    point = 10 * plusPoint;
                }
                break;
        }
    }
    point = parseInt(point);
    return point;
};

module.exports = calculatePoint;
