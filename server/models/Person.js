var keystone = require('keystone');
var Types = keystone.Field.Types;



var Person = new keystone.List('Person', {
    map: { name: 'fullName' },
	autokey: { path: 'slug', from: 'fullName', unique: true },
});

Person.add({
    fullName: { type: String, initial:true, required: true,label: 'Họ và tên', index:true,  },
    sex: { type: Types.Select, options: 'nam, nữ', label: "Giới tính" },
    birth: {type: Types.Date, inputFormat: "DD-MM-YYYY", format: "DD-MM-YYYY", label: 'Ngày sinh', todayButton: false},
    death: {type: Types.Date, inputFormat: "DD-MM-YYYY", format: "DD-MM-YYYY", label: 'Ngày mất', todayButton: false},
    generation: {type: Types.Number, label: 'Đời'},
    partner: {type: Types.Relationship, ref: 'Person', label: "Hôn Nhân"},
    marriageStatus: {type: String, label: 'Tình Trạng Hôn Nhân' },
    parent: {type: Types.Relationship, ref:'Person', label: 'Cha'},
    children: {type: Types.Relationship, ref:'Person', label: 'Con', many: true},
    information: { type: Types.Html, wysiwyg: true, height: 150, label: "Thông tin" },
	image: {type: Types.CloudinaryImage, label: 'Ảnh'},


});

// console.log(Person.schema.post);

const setChildren = () => {

}


Person.schema.post('save', function(doc, next) {
    // console.log(this);

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
