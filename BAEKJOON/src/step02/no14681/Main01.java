package step02.no14681;

import java.util.Scanner;

public class Main01 {

	public static void main(String[] args) {
//		설계>
//		1. Scanner 사용
//		2. x, y를 int로 입력
//		3. 조건 연산자로 어느 분면인지 구하기
//			> 1 : x>0, y>0
//			> 2 : x<0, y>0
//			> 3 : x>0, y<0
//			> 4 : x>0, y<0
		Scanner scan = new Scanner(System.in);
		
		int x = scan.nextInt();
		int y = scan.nextInt();
		
		int quadrant = ((x > 0)&&(y > 0) ? 1 : (x < 0)&&(y > 0) ? 2 :
			(x < 0)&&(y < 0) ? 3 : (x > 0)&&(y < 0) ? 4 : 0 );
		
		System.out.println(quadrant); 

	}

}
