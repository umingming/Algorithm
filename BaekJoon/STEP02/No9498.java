import java.util.Scanner;
public class No9498 {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		sc.close();
		
		
		System.out.println((A>=90)?"A": (A>=80)?"B": (A>=70)?"C": (A>=60)?"D": "F");
	}
}
