using System;
using System.Collections.Generic;
using System.Linq;

namespace OpenPolytechnicTechnicalTest
{

    class Order
    {

        public List<OrderLine> ListOrderLines = new List<OrderLine> { };


        public Order()
        {
            ListOrderLines.Add(new OrderLine( "BS011", "ShoePlate Top - Small",   60, 37.0, 13.51, 0.15));
            ListOrderLines.Add(new OrderLine( "BS009",            "BasePlates", 80, 12.0,  0.00, 0.15));
            ListOrderLines.Add(new OrderLine("EX-001", "Freight", 1, 80.0, 0.00, 0.15));
        }

        internal void PrintHeaderOrderLines()
        {
            ListOrderLines.ForEach(g => Console.WriteLine(g.PrintOrderLine()));
        }

        internal void PrintHeader() =>
            Console.WriteLine(String.Format("{0,-10} {1,-25} {2, -10}  {3, -10}  {4, -10}  {5, -10} {6, -10}  {7, -10}", "Item No", "Description", "Quantity", "Unit Price", "Discount", "Tax", "Total", "DiscountedTotal"));

        internal void PrintTotal() =>
             Console.WriteLine(String.Format("Initial cost was {0}", OriginalCost()));

        internal void PrintDiscountedTotal() =>
            Console.WriteLine(String.Format("Cost after discounts is {0}", DiscountCost()));

        private double DiscountCost() => ListOrderLines.Select(g => g.DiscountedTotal).Sum();
            
       

        private double OriginalCost() => ListOrderLines.Select(g => g.Total).Sum();

    }



}
