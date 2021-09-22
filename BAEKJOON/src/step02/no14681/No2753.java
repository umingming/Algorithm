package step02;

import java.util.Scanner;

public class No2753 {

	public static void main(String[] args) {
//		설계>
//		1. Scanner 사용
//		2. 연도를 int로 입력
//		3. if문
//			>윤년이면 1, 아니면 0을 출력
//				>윤년 : 4의 배수 && 100의 배수가 아닐 때, 400의 배수일 때,
//				>평년 : 그 외
		Scanner scan = new Scanner(System.in);

		int year = scan.nextInt();
		
		if(year >= 1 && year <= 4000) {
			if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
				System.out.println("1");
			} else {
				System.out.println("0");
			}
		}
	}

}
