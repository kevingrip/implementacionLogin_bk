import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

mongoose.pluralize(null);

const collection = 'user'; 

const schema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true, index: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'premium', 'usuario'], default: 'usuario' },

},{ versionKey: false });

schema.plugin(mongoosePaginate);

const userModel = mongoose.model(collection, schema); 

export default userModel;