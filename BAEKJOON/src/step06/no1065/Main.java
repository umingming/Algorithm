package step06.no1065;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		입력한 수보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
		-한수; 양의 정수의 각 자리가 등차수열을 이루는 수
		
		설계>
		1. Scanner
		2. 숫자 입력 받음
		3. 카운트 변수 선언
		4. for문 숫자 반복
			>if문 100보다 클 경우
				>if문 각 자리가 등차 수열?
					>i/100 - i/10 != i/10 - i/1
					>countinue
			>count++
		5. count 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int input = scan.nextInt();
		int count = 0;
		
		for(int i=1; i<input+1; i++) {
			if(i >= 100) {
				if(i/100 - (i%100 - i%10)/10 != (i%100 - i%10)/10 - (i%10)) {
					continue;
				}
			}
			count++;
		}
		
		System.out.println(count);
		

	}

}
