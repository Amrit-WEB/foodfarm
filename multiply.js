function multiply (arr){
    let mul = 1;
    for(let i=0;i<=arr.length;i++){
        mul = arr[i] * mul;
    }
    for(let i=0;i<=arr.length;i++){
        arr[i] = mul/arr[i];
    }
    console.log(arr);
}
var a = [1,2,3,4];
multiply(a);


public class MyClass {
    public static void main(String args[]) {
      int ar[]={1,2,3,4};
      int a[]=new int[ar.length];
      
      for(int i=0;i<ar.length;i++){
          int mul=1;
          for(int j=0;j<ar.length;j++){
          if(i==j){
              continue;
          }
          else
         mul=mul*ar[j];
      }
          a[i]=mul;
      }
     
      for(int aa:a)
      System.out.println(aa);
    }
}
