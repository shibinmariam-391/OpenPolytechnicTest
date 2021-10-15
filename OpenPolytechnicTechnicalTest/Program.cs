using System;

namespace OpenPolytechnicTechnicalTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // This test isn't about your ability to dealing with I/O, so don't worry about
            // user data. Feel free to just create a static object to deal with an order.
            // How you do that... is part of the test. ;)

            // Your checkout calculation code should go here.

            // Output the total here.
            //Console.WriteLine(Initial cost was ${originalCost});
            //Console.WriteLine(Cost after discounts is ${discountCost});




            var order = new Order();
            order.PrintHeader();
            order.PrintHeaderOrderLines();
            order.PrintDiscountedTotal();
            order.PrintTotal();



        }
    }
}
