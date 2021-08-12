import java.util.Scanner;
public class No2753 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		
		
		System.out.println((A%4==0&&A%400==0)?"1":(A%4==0&&A%100!=0)?"1":"0");
	}
}

