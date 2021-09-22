package step02;

import java.util.Scanner;

public class No2753Switch {

	public static void main(String[] args) {
//		설계>
//		1. Scanner 사용
//		2. 연도를 int로 입력
//		3. switch문
//			>윤년이면 1, 아니면 0을 출력
//				>윤년 : 4의 배수 && 100의 배수가 아닐 때, 400의 배수일 때,
//				>평년 : 그 외
		Scanner scan = new Scanner(System.in);
		
		int year = scan.nextInt();
		switch(year % 4) {
		case 0 :
			switch(year % 100){
			case 0 :
				System.out.println("0");
				break;
			}
		}

	}

}
