using System;

namespace OpenPolytechnicTechnicalTest
{
    class OrderLine
    {

        /// <summary>
        /// primary key to the parts table
        /// </summary>
        public string ItemNo { get; set; }

        public string Description { get; set; }
        public int Quantity { get; set; }
        public double Unit { get; set; }
        public double Discount { get; set; }
        public double Tax { get; set; }
        public double Total => Quantity * Unit * (1 + Tax / 100.0);

        public double DiscountedTotal => Quantity * Unit * (1 - Discount / 100.0) * (1 + Tax / 100.0);


        // class that holds just data and methods for one row of the order
        public OrderLine(string itemNo, string description, int quantity, double unit, double discount, double tax)
        {
            ItemNo = itemNo;
            Description = description;
            Quantity = quantity;
            Unit = unit;
            Discount = discount;
            Tax = tax;
        }

        internal string PrintOrderLine() =>
            String.Format("{0,-10} {1,-25} {2, -10}  {3, -10}  {4, -10}  {5, -10}  {6, -10}  {7, -10}", ItemNo, Description, Quantity, Unit, Discount, Tax, Total, DiscountedTotal );
        
    }



}
