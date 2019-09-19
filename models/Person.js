var keystone = require('keystone');
var Types = keystone.Field.Types;
var Person = new keystone.List('Person', {
    map: { name: 'fullName' },
	autokey: { path: 'slug', from: 'fullName', unique: true },
    label: "Thành Viên",
});

Person.add({
    fullName: { type: String, initial:true, required: true,label: 'Họ và tên', index:true,  },
    sex: { type: Types.Select, options: 'nam, nữ', label: "Giới tính" },
    birth: {type: String, label: 'Ngày sinh'},
    death: {type: String, label: 'Ngày mất'},
    generation: {type: Types.Number, label: 'Đời'},
    branch: {type: Types.Select, options: '1, 2, 3, 4', label: 'Chi'},
    partner: {type: Types.Relationship, ref: 'Person', label: "Hôn Nhân"},
    parent: {type: Types.Relationship, ref:'Person', label: 'Cha'},
    children: {type: Types.Relationship, ref:'Person', label: 'Con', many: true},
    information: { type: Types.Html, wysiwyg: true, height: 150, label: "Thông tin" },
	image: {type: Types.CloudinaryImage, label: 'Ảnh'},


});

Person.schema.post('save', function(doc, next) {

    if(doc.partner){
        Person.model.findOneAndUpdate(
            {_id : doc.partner},
            {partner: doc},
            () => {
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
            }
        )
    }else{
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
    }



});

Person.register();
