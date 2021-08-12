import java.util.Scanner;
public class No2884 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int H = sc.nextInt();
		int M = sc.nextInt();
		sc.close();
		//M>=45
		if(M>45) System.out.println(H+" "+(M-45));
		//M<45
		else if(H!=0&&M<45) System.out.println((H-1)+" "+(M+60-45));
		//H=0,M<45
		else if(H==0&&M<45) System.out.println("23"+" "+(M+60-45));	
	}
}
