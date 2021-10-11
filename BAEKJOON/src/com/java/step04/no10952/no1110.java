package com.java.step04;

import java.util.Scanner;

public class no1110 {

	public static void main(String[] args) {
		/*
		사이클의 길이를 구하는 프로그램을 작성하시오.
		-input이 10보다 작으면 0을 붙여 두자리수로 만듦
		-1의 자리 수와 각자리의 합의 1의 자리 수를 이어붙여 수를 만듦
		-그 수가 처음의 수가 되면 종료
		
		설계>
		1. Scanner
		2. 숫자 입력해 integer 변수에 저장
		3. count, num 변수 선언 후 0, input으로 초기화
			>if문 num이 10보다 작은지? *10
		4. while문 (num!=input && count != 0)
			>num = (num%10)*10 + (num/10 + num%10)%10
			>count ++
		5. count 출력	
		 */
		
		Scanner scan = new Scanner(System.in);
		int input = scan.nextInt();
		int count = 0;
		int num = input;
		
		while(num != input || (num == input & count == 0)) {
			num = (num%10)*10 + (num/10 + num%10)%10;
			count++;
		}
		
		System.out.println(count);
	}

}
