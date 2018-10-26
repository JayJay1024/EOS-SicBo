import React, { Component } from 'react';
import { Drawer, Table, Divider } from 'antd';

class SicBoInfoDrawer extends Component {
    render() {

        const info_columns = [{
            title: "押注标识符",
            dataIndex: "bet_flag",
            key: "bet_flag",
            // align: "center",
            width: "25%",
        }, {
            title: "押注标识(key)",
            dataIndex: "bet_key",
            key: "bet_key",
            // align: "center",
            width: "25%",
        }, {
            title: "说明",
            dataIndex: "bet_explain",
            key: "bet_explain",
            // align: "center",
            width: "50%",
        }];

        const info_data = [{
            key: "1",  bet_flag: "odd",         bet_key: "0",      bet_explain: "单",
        }, {
            key: "2",  bet_flag: "even",        bet_key: "1",      bet_explain: "双",
        }, {
            key: "3",  bet_flag: "big",         bet_key: "2",      bet_explain: "大",
        }, {
            key: "4",  bet_flag: "small",       bet_key: "3",      bet_explain: "小",
        }, {
            key: "5",  bet_flag: "dice_110",    bet_key: "110",    bet_explain: "对子-1（三个骰子点数出现两个1）",
        }, {
            key: "6",  bet_flag: "dice_220",    bet_key: "220",    bet_explain: "对子-2（三个骰子点数出现两个2）",
        }, {
            key: "7",  bet_flag: "dice_330",    bet_key: "330",    bet_explain: "对子-3（三个骰子点数出现两个3）",
        }, {
            key: "8",  bet_flag: "dice_440",    bet_key: "440",    bet_explain: "对子-4（三个骰子点数出现两个4）",
        }, {
            key: "9",  bet_flag: "dice_550",    bet_key: "550",    bet_explain: "对子-5（三个骰子点数出现两个5）",
        }, {
            key: "10", bet_flag: "dice_660",    bet_key: "660",    bet_explain: "对子-6（三个骰子点数出现两个6）",
        }, {
            key: "11", bet_flag: "dice_111",    bet_key: "111",    bet_explain: "围骰-1（三个骰子点数都是1）",
        }, {
            key: "12", bet_flag: "dice_222",    bet_key: "222",    bet_explain: "围骰-2（三个骰子点数都是2）",
        }, {
            key: "13", bet_flag: "dice_333",    bet_key: "333",    bet_explain: "围骰-3（三个骰子点数都是3）",
        }, {
            key: "14", bet_flag: "dice_444",    bet_key: "444",    bet_explain: "围骰-4（三个骰子点数都是4）",
        }, {
            key: "15", bet_flag: "dice_555",    bet_key: "555",    bet_explain: "围骰-5（三个骰子点数都是5）",
        }, {
            key: "16", bet_flag: "dice_666",    bet_key: "666",    bet_explain: "围骰-6（三个骰子点数都是6）",
        }, {
            key: "17", bet_flag: "dice_123456", bet_key: "123456", bet_explain: "全围（三个骰子点数相同）",
        }, {
            key: "18", bet_flag: "dice_4",      bet_key: "4",      bet_explain: "点数和-4",
        }, {
            key: "19", bet_flag: "dice_5",      bet_key: "5",      bet_explain: "点数和-5",
        }, {
            key: "20", bet_flag: "dice_6",      bet_key: "6",      bet_explain: "点数和-6",
        }, {
            key: "21", bet_flag: "dice_7",      bet_key: "7",      bet_explain: "点数和-7",
        }, {
            key: "22", bet_flag: "dice_8",      bet_key: "8",      bet_explain: "点数和-8",
        }, {
            key: "23", bet_flag: "dice_9",      bet_key: "9",      bet_explain: "点数和-9",
        }, {
            key: "24", bet_flag: "dice_10",     bet_key: "10",     bet_explain: "点数和-10",
        }, {
            key: "25", bet_flag: "dice_11",     bet_key: "11",     bet_explain: "点数和-11",
        }, {
            key: "26", bet_flag: "dice_12",     bet_key: "12",     bet_explain: "点数和-12",
        }, {
            key: "27", bet_flag: "dice_13",     bet_key: "13",     bet_explain: "点数和-13",
        }, {
            key: "28", bet_flag: "dice_14",     bet_key: "14",     bet_explain: "点数和-14",
        }, {
            key: "29", bet_flag: "dice_15",     bet_key: "15",     bet_explain: "点数和-15",
        }, {
            key: "30", bet_flag: "dice_16",     bet_key: "16",     bet_explain: "点数和-16",
        }, {
            key: "31", bet_flag: "dice_17",     bet_key: "17",     bet_explain: "点数和-17",
        }, {
            key: "32", bet_flag: "dice_102",    bet_key: "102",    bet_explain: "三个骰子出现1、2点",
        }, {
            key: "33", bet_flag: "dice_103",    bet_key: "103",    bet_explain: "三个骰子出现1、3点",
        }, {
            key: "34", bet_flag: "dice_104",    bet_key: "104",    bet_explain: "三个骰子出现1、4点",
        }, {
            key: "35", bet_flag: "dice_105",    bet_key: "105",    bet_explain: "三个骰子出现1、5点",
        }, {
            key: "36", bet_flag: "dice_106",    bet_key: "106",    bet_explain: "三个骰子出现1、6点",
        }, {
            key: "37", bet_flag: "dice_203",    bet_key: "203",    bet_explain: "三个骰子出现2、3点",
        }, {
            key: "38", bet_flag: "dice_204",    bet_key: "204",    bet_explain: "三个骰子出现2、4点",
        }, {
            key: "39", bet_flag: "dice_205",    bet_key: "205",    bet_explain: "三个骰子出现2、5点",
        }, {
            key: "40", bet_flag: "dice_206",    bet_key: "206",    bet_explain: "三个骰子出现2、6点",
        }, {
            key: "41", bet_flag: "dice_304",    bet_key: "304",    bet_explain: "三个骰子出现3、4点",
        }, {
            key: "42", bet_flag: "dice_305",    bet_key: "305",    bet_explain: "三个骰子出现3、5点",
        }, {
            key: "43", bet_flag: "dice_306",    bet_key: "306",    bet_explain: "三个骰子出现3、6点",
        }, {
            key: "44", bet_flag: "dice_405",    bet_key: "405",    bet_explain: "三个骰子出现4、5点",
        }, {
            key: "45", bet_flag: "dice_406",    bet_key: "406",    bet_explain: "三个骰子出现4、6点",
        }, {
            key: "46", bet_flag: "dice_506",    bet_key: "506",    bet_explain: "三个骰子出现5、7点",
        }, {
            key: "47", bet_flag: "dice_100",    bet_key: "100",    bet_explain: "三个骰子出现1点",
        }, {
            key: "48", bet_flag: "dice_200",    bet_key: "200",    bet_explain: "三个骰子出现2点",
        }, {
            key: "49", bet_flag: "dice_300",    bet_key: "300",    bet_explain: "三个骰子出现3点",
        }, {
            key: "50", bet_flag: "dice_400",    bet_key: "400",    bet_explain: "三个骰子出现4点",
        }, {
            key: "51", bet_flag: "dice_500",    bet_key: "500",    bet_explain: "三个骰子出现5点",
        }, {
            key: "52", bet_flag: "dice_600",    bet_key: "600",    bet_explain: "三个骰子出现6点",
        }];

        return (
            <div>
                <Drawer
                    // title = "SicBo Info"
                    width = "50%"
                    closable = {false}
                    onClose = {this.props.handleCloseInfo}
                    visible = {this.props.info_visible}
                >
                    <Divider>一、押注说明</Divider>
                    <Table
                        columns = {info_columns}
                        dataSource = {info_data}
                        pagination = {false}
                        style={{ backgroundColor: "#efefef" }}
                    />
                    <Divider>二、 memo格式</Divider>
                    <p>r:推荐人账号;u:uuid;押注标识:押注金额</p>
                    <p>("推荐人账号"和"押注标识"之间的是英文分号，"押注标识"和"押注金额"之间的是英文冒号)</p>
                    <p>----------------------------------------------------------------------------------------------</p>
                    <p>例子1、押大，金额为2.5000 EOS，推荐人账号是aaaabbbb2222，uuid为3315f8ee-c212-41b0-9e8e-ce3ca00f024e：</p>
                    <p>r:aaaabbbb2222;u:3315f8ee-c212-41b0-9e8e-ce3ca00f024e;2:250000</p>
                    <p>----------------------------------------------------------------------------------------------</p>
                    <p>例子2、押0.6000 EOS全围，以及押2.0000 EOS 双，无推荐人，uuid为3315f8ee-c212-41b0-9e8e-ce3ca00f024e：</p>
                    <p>u:3315f8ee-c212-41b0-9e8e-ce3ca00f024e;123456:6000;1:20000</p>
                    <p>----------------------------------------------------------------------------------------------</p>
                    <p>注：</p>
                    <p>a. uuid是必须的，长度为36的字符串，可以通过使用"uuid-js"库</p>
                    <p>b. uuid-js: https://www.npmjs.com/package/uuid-js</p>
                    <p>c. 如果前端使用的uuid不是长度为36的字符串，请告知，我们需要同步修改合约</p>
                    <Divider>三、 结果</Divider>
                    <p>player: 玩家</p>
                    <p>payin: 投注总金额</p>
                    <p>payout: 中奖总金额</p>
                    <p>payed: 奖金是否已经支付</p>
                    <p>dice: 骰子点数</p>
                    <p>detail: 格式为 "投注类型:该类型投注金额:该类型中奖金额"</p>
                </Drawer>
            </div>
        );
    }
}

export default SicBoInfoDrawer;
