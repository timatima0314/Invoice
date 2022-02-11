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
            Payment: '',    //支払期限
            Name: '',    //名前
            Company: '', //会社名
            PostCode: '',    //郵便番号
            Address: '', //住所
            Tel: '',     //電話番号
            Mail: '',    //メールアドレス
            Payee: '',   //振込先
            Remarks: '',  //備考
        }
    },
    components: {
        'component-main': componentMain,
    }
}).mount('#app')