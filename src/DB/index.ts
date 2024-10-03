import httpStatus from "http-status";
import { User } from "../modules/user/user.model";
import AppError from "../utils/appError";

const adminData = {
  name: {
    firstName: "Masud",
    middleName: "Atel",
    lastName: "Rana",
  },
  email: "admin@gmail.com",
  password: "admin",
  role: "admin",
  age: 20,
  gender: "male",
  contact: "017234324324",
  address: "Sirajganj",
};

// ---------  seed admin data to database at database connection ----------
const seedAdmin = async () => {
  const user = await User.findOne({ role: "admin" });
  if (!user) {
    try {
      await User.create(adminData);
    } catch (error) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Faild to seed admin data"
      );
    }
  }
};

export default seedAdmin;
