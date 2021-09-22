package step02.no14681;

import java.util.Scanner;

public class Main00 {

	public static void main(String[] args) {
//		설계>
//		1. Scanner 사용
//		2. x, y를 int로 입력
//		3. if문
//			> x, y가 어느 사분면에 속하는지 출력
//				> 1 : x>0, y>0
//				> 2 : x<0, y>0
//				> 3 : x>0, y<0
//				> 4 : x>0, y<0
		Scanner scan = new Scanner(System.in);
		int x = scan.nextInt();
		int y = scan.nextInt();
		
		if(x > 0) {
			if(y > 0) {
				System.out.println("1");
			}else if(y < 0) {
				System.out.println("4"); 
			}
		} else if(x < 0) {
			if(y > 0) {
				System.out.println("2"); 
			}else if(y < 0) {
				System.out.println("3"); 
			}
		}
	}
}
