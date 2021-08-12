import java.util.Scanner;

public class No2588_2 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		int B = sc.nextInt();
		sc.close();
		
		String C = Integer.toString(B);
		char C1 = C.charAt(0);
		int B1 = Character.getNumericValue(C1);  

		char C2 = C.charAt(1);
		int B2 = Character.getNumericValue(C2);  
		
		char C3 = C.charAt(2);
		int B3 = Character.getNumericValue(C3);  
		
		System.out.println(A*B3);
		System.out.println(A*B2);
		System.out.println(A*B1);
		System.out.println(A*B);
	}
}
