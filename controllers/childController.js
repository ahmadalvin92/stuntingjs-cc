const User = require('../models/userModel');
const Child = require('../models/childModel');

exports.createChild = async (req, res) => {
  try {
    const { id_parent_user, ch_name, ch_date_birth, ch_gender, ch_birth_height } = req.body;

    // Cek apakah id_parent_user valid
    const parentUser = await User.findById(id_parent_user);
    if (!parentUser) {
      return res.status(400).json({ error: 'Invalid parent user ID' });
    }

    // Buat data anak baru
    const newChild = {
      id_parent_user,
      ch_name,
      ch_date_birth,
      ch_gender,
      ch_birth_height,
      creat_at_by: parentUser.id,
      creat_at_time: new Date()
    };

    // Simpan data anak ke dalam tabel children
    const childId = await Child.create(newChild);

    res.status(201).json({ message: 'Child data created successfully', childId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};