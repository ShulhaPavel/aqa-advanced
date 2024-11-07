const devide = (numerator, denominator) => {
    try{
    if (typeof numerator === 'string' || typeof denominator === 'string') {
      console.log("Ділення на строку неможливе");
    } else if (denominator === 0) {
      console.log("Ділення на 0 неможливе");
    } else {
        let res = numerator / denominator;
        console.log(res);
      } 
    }catch (error) {
        console.log(`Сталася помилка: ${error}`);
      } finally {
        console.log("Робота завершена");
      }
};

  devide(10, 2);
  devide(10, 0);
  devide(10, -2);
  devide("qqq", 2);
  devide(10, "qqq");
 
// const devide = (numerator, denominator ) => {
//     try{
//        let res = numerator / denominator;
//        console.log(res);
//       } catch {
//            switch (true){
//                case (denominator === 0):
//                    console.log("Ділення на 0 неможливе");
//                    break;
//                case (typeof numerator === 'string' || typeof denominator === 'string'):
//                    console.log("Ділення на строку неможливе");
//                    break;
//                } 
//            } finally{
//                console.log("Робота завершена");
//        }
// }