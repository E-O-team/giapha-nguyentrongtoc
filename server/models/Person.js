var keystone = require('keystone');
var Types = keystone.Field.Types;



var Person = new keystone.List('Person', {
    map: { name: 'fullName' },
	autokey: { path: 'slug', from: 'fullName', unique: true },
});

Person.add({
    fullName: { type: String, initial:true, required: true,label: 'Họ và tên', index:true,  },
    birth: {type: Date, inputFormat: "DD-MM-YYYY", format:"DD-MM-YYYY", label: 'Ngày sinh'},
    death: {type: Date, label: 'Ngày mất'},
    husband: {type: Types.Relationship, ref: 'Person', label: "Chồng", dependsOn:{sex: 'nữ'}},
    marriageStatus: {type: String, label: 'Tình Trạng Hôn Nhân' },
    parent: {type: Types.Relationship, ref:'Person', label: 'Cha'},
    children: {type: Types.Relationship, ref:'Person', label: 'Con', many: true},
    information: { type: Types.Html, wysiwyg: true, height: 150, label: "Thông tin" },
	image: {type: Types.CloudinaryImage, label: 'Ảnh'},
    generation: {type: Types.Number, label: 'Đời'},
    cmnd: {type: Types.Number, label: 'Chứng Minh Nhân Dân'},
    sex: { type: Types.Select, options: 'nam, nữ', label: "Giới tính" },
    phoneNumber: {type: Types.Number, label: 'Số điện thoại'},

});

// console.log(Person.schema.post);

Person.schema.post('save', function(doc, next) {
    // console.log(this);
    Person.model.update(
        {},
        {$pull : {children: {$in :[ doc ]}}},
        {multi: true},
        () => {
            Person.model.findOneAndUpdate(
                {_id : doc.parent},
                {$addToSet : {children: doc}},
                () => next()
            )
        }
    )

});

Person.register();
