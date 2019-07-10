public class prime {
    public static void main(String[] args) {
        for(int i=101;i<301;i++){
            boolean a=false;
            for(int j=2;j<Math.sqrt(i);j++){
                if(i%j==0){
                    a=false;
                    break;
                }else{
                    a=true;
                }
            }
            if(a){
                System.out.print(i+",");
            }
        }
    }
}
