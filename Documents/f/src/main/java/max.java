import java.util.Scanner;

public class max {
    public static void main(String[] args){
        int[] arr=new int[5];
        System.out.println("输入五个数字：");
        Scanner scanner=new Scanner(System.in);
        for(int i=0;i<arr.length;i++){
            arr[i]= scanner.nextInt();
        }
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    int t=arr[i];
                    arr[i]=arr[j];
                    arr[j]=t;
                }
            }
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]+"\t");
        }
    }
}
