import { Sequelize } from "sequelize";


export default (sequelize)=>{

    class Customer extends Sequelize.Model{

    }

    Customer.init({

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Email is required!'
                },
                notEmpty:{
                    msg:"Email can't be empty!"
                }
            }
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Password is required!'
                },
                notEmpty:{
                    msg:"Password can't be empty!"
                }
            }
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Name is required!'
                },
                notEmpty:{
                    msg:"Name can't be empty!"
                }
            }
        },
        address:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Address is required!'
                },
                notEmpty:{
                    msg:"Address can't be empty!"
                }
            }
        },
        phone:{
            type:Sequelize.INTEGER,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Phone is required!'
                },
                notEmpty:{
                    msg:"Phone can't be empty!"
                }
            }
        }

    },
    { 
        sequelize,
        timestamps:false,
        createAt:false,
        updateAt:false
    });


    return Customer;


}