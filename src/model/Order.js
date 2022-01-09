import { Sequelize } from "sequelize";


export default (sequelize)=>{

    class Order extends Sequelize.Model{

    }

    Order.init({

        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ammount:{
            type: Sequelize.INTEGER,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Ammout is required!'
                },
                notEmpty:{
                    msg:"Ammout can't be empty!"
                }
            }
        },
        order_date:{
            type: Sequelize.DATE,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Order Date is required!'
                },
                notEmpty:{
                    msg:"Order Date can't be empty!"
                }
            }
        },
        order_address:{
            type: Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull:{
                    msg:'Order Address is required!'
                },
                notEmpty:{
                    msg:"Order Address can't be empty!"
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


    return Order;


}