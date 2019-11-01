for (var i = 0; i < eligible_degree_list_ol.length; i++) {
    try {
        var key = eligible_degree_list_ol[i];
        var dg_stream = degrees[key].advanced_level.stream;
        console.log(key);
        if (dg_stream == 'Any') {//any
            //Check for minimun result
            if (exam_type == "Local") {
                dg_rs1_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject1);
                dg_rs2_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject2);
                dg_rs3_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject3);
                if (std_res1 >= dg_rs1_l || std_res1 >= dg_rs2_l || std_res1 >= dg_rs3_l) {
                    if (std_res2 >= dg_rs1_l || std_res2 >= dg_rs2_l || std_res2 >= dg_rs3_l) {
                        if (std_res3 >= dg_rs1_l || std_res3 >= dg_rs2_l || std_res3 >= dg_rs3_l) {
                            eligible_degree_list_al.push(key);
                        }
                    }
                }
            } else if (exam_type == "London") {
                dg_rs1_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject1);
                dg_rs2_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject2);
                dg_rs3_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject3);
                console.log('London', dg_rs1_ln, dg_rs2_ln, dg_rs3_ln);
                if (std_res1 >= dg_rs1_ln || std_res1 >= dg_rs2_ln || std_res1 >= dg_rs3_ln) {
                    if (std_res2 >= dg_rs1_ln || std_res2 >= dg_rs2_ln || std_res2 >= dg_rs3_ln) {
                        if (std_res3 >= dg_rs1_ln || std_res3 >= dg_rs2_ln || std_res3 >= dg_rs3_ln) {
                            eligible_degree_list_al.push(key);
                        }
                    }
                }
            }
        } else {//specific
            var comp_strm = degrees[key].advanced_level.compulsary_stream;
            var count = countComSubs(comp_strm);
            if (matchStream(std_stream, comp_strm) == true) {
                var comp_sub1 = degrees[key].advanced_level.compulsary_subjects.compulsary_subject1;
                var comp_sub2 = degrees[key].advanced_level.compulsary_subjects.compulsary_subject2;
                var comp_sub3 = degrees[key].advanced_level.compulsary_subjects.compulsary_subject3;
                var mtch_c1 = 0;
                var mtch_c2 = 0;
                var mtch_c3 = 0;
                var sub_c1 = countComSubs(JSON.stringify(comp_sub1));
                var sub_c2 = countComSubs(JSON.stringify(comp_sub2));
                var sub_c3 = countComSubs(JSON.stringify(comp_sub3));
                var sub_arr = [std_subj1, std_subj2, std_subj3];
                if (sub_c1 == 0) {
                    mtch_c1 = -100;
                }
                if (sub_c2 == 0) {
                    mtch_c2 = -100;
                }
                if (sub_c3 == 0) {
                    mtch_c3 = -100;
                }
                for (var i = 0; i < 3; i++) {
                    if (matchStream(sub_arr[i], comp_sub1) == true) {
                        mtch_c1++;
                    } else if (matchStream(sub_arr[i], comp_sub2) == true) {
                        mtch_c2++;
                    } else if (matchStream(sub_arr[i], comp_sub3) == true) {
                        mtch_c3++;
                    }
                }
                if (mtch_c1 == sub_c1 || mtch_c2 == sub_c2 || mtch_c3 == sub_c3) {
                    if (exam_type == "Local") {
                        dg_rs1_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject1);
                        dg_rs2_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject2);
                        dg_rs3_l = resultConvert(degrees[key].advanced_level.minimum_results.specific_local.subject3);
                        if (std_res1 >= dg_rs1_l || std_res1 >= dg_rs2_l || std_res1 >= dg_rs3_l) {
                            if (std_res2 >= dg_rs1_l || std_res2 >= dg_rs2_l || std_res2 >= dg_rs3_l) {
                                if (std_res3 >= dg_rs1_l || std_res3 >= dg_rs2_l || std_res3 >= dg_rs3_l) {
                                    eligible_degree_list_al.push(key);
                                }
                            }
                        }
                    } else if (exam_type == "London") {
                        dg_rs1_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject1);
                        dg_rs2_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject2);
                        dg_rs3_ln = resultConvert(degrees[key].advanced_level.minimum_results.specific_london.subject3);
                        if (std_res1 >= dg_rs1_ln || std_res1 >= dg_rs2_ln || std_res1 >= dg_rs3_ln) {
                            if (std_res2 >= dg_rs1_ln || std_res2 >= dg_rs2_ln || std_res2 >= dg_rs3_ln) {
                                if (std_res3 >= dg_rs1_ln || std_res3 >= dg_rs2_ln || std_res3 >= dg_rs3_ln) {
                                    eligible_degree_list_al.push(key);
                                }
                            }
                        }
                    }
                }

            }
        }
    } catch (error) {
        console.log(error);
    }
}