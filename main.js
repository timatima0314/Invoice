const componentMain = {
    props: {
        suppliers: {
            type: String,
        },
        selected_hoti: {
            type: String,
        },
        invoice_number: {
            type: String,
        },
        issue: {
            type: String,
        },
        payment: {
            type: String,
        },
        name: {
            type: String,
        },
        company: {
            type: String,
        },
        post_code: {
            type: String,
        },
        address: {
            type: String,
        },
        tel: {
            type: String,
        },
        mail: {
            type: String,
        },
        payee: {
            type: String,
        },
        remarks: {
            type: String,
        },
        items: {
            type: Array,
        },
        sub_total_array: {
            type: Array,
        },
        tax: {
            type: Number,
        },
        total_amount: {
            type: Number,
        },
        sub_total: {
            type: Number,
        },
        issue_conv: {
            type: String,
        },
        payment_conv: {
            type: String,
            default: '',
        },
        issue_show:{
            type:Boolean,
        },
        payment_show:{
            type:Boolean,
        }
    },
    template: '#main-template',
}
Vue.createApp({
    data: function () {
        return {
            Suppliers: '',   // 取引先
            SelectedHoTi: '御中',
            HonorificTitle: { 0: '御中', 1: '様' }, // 敬称
            InvoiceNumber: '',  //請求書番号
            Issue: '',  //発行日
            IssueShow:false, // 発行日の印字
            Payment: '',    //支払期限
            PaymentShow:false,  //支払い期限の印字
            Name: '',    //名前
            Company: '', //会社名
            PostCode: '',    //郵便番号
            Address: '', //住所
            Tel: '',     //電話番号
            Mail: '',    //メールアドレス
            Payee: '',   //振込先
            Remarks: '',  //備考
            TaxSelect: { 0: "10%", 1: "対象外" },
            Items: [{ item: '', quantity: '', unit: '', price: '', tax: '10%' }],
            SubTotalArray: [],  //金額の配列
            Tax: '',   //消費税
            SubTotal: '',  //小計
            TotalAmount: '',  //合計金額

        }
    },
    computed: {
        IssueConv: function () {
            if (this.Issue) {
                let date = this.Issue;
                let res = date.split('-');
                console.log(res);
                console.log(res[0] + "年" + res[1] + "月" + res[2] + "日");
                const conv = res[0] + "年" + res[1] + "月" + res[2] + "日";
                return conv;
            } else {
                return;
            };
        },
        PaymentConv: function () {
            if (this.Payment) {
                let date = this.Payment;
                let res = date.split('-');
                console.log(res);
                console.log(res[0] + "年" + res[1] + "月" + res[2] + "日");
                const conv = res[0] + "年" + res[1] + "月" + res[2] + "日";
                return conv;
            } else {
                return;
            };

        },


        subTotal: function () {
            let som = [];
            this.Items.forEach(function (e) {
                let price = e.price * e.quantity;
                // console.log(uuu);
                // let yyy = Number(e.quantity);
                // console.log(yyy);
                som.push(price);
                // this.SubTotal.push(price);
                // console.log(som);
            });
            // console.log(som);
            this.SubTotalArray = som;
            let total = som.reduce(function (sum, element) {
                return sum + element;
            }, 0);
            this.SubTotal = total;
            return total;
            // console.log(total);
        },
        ConTax: function () {
            let som = [];
            this.Items.forEach(function (e) {
                if (e.tax === "対象外") {
                    return
                } else {
                    let price = e.price * e.quantity;

                    // let price = e.price;
                    som.push(price);
                    // console.log(som);
                };
            })
            let total = som.reduce(function (sum, element) {
                return sum + element;
            }, 0);
            // console.log(total);
            let tax = Math.trunc(total * 0.1);
            // console.log(tax);
            this.Tax = tax;
            return tax;
        },
        Total: function () {
            let total = this.subTotal + this.ConTax;
            this.TotalAmount = total;
            return total;
        }
    },
    methods: {
        createItems: function () {
            const newItems = { item: '', quantity: '', unit: '', price: '', tax: '10%' };
            this.Items.push(newItems);
            // let i = this.Items.length;
            // console.log(i)
            // // 複製するHTML要素を取得
            // let content_area = document.getElementById("items0");
            // // 複製
            // let clone_element = content_area.cloneNode(true);
            // clone_element.id = "items"+(i-1)
            // // 複製したHTML要素をページに挿入
            // content_area.after(clone_element);

        },
        deleteItems: function () {
            // var e = e || window.event;
            // var elem = e.target || e.srcElement;
            // var elemId = elem.id;
            // console.log(elemId);
            const self = this;
            $(document).on("click", ".item__delete-button", function () {
                let Id = $(this).attr('id');
                console.log(Id);
                self.Items.splice(Id, 1);

            })
        }

    },
    components: {
        'component-main': componentMain,
    }
}).mount('#app')