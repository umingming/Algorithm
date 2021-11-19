package com.java.step08.no2292;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		/*
		벌집의 중앙에서 N번 방까지 최소 개수의 방을 계산하는 프로그램
		-1->6->12->18->24
		-1, 2~7, 8~19, 20~37, 38~61
		
		설계>
		1. Scanner
		2. 숫자 입력 받음
		3. index와 count 변수 선언
		4. for문 입력 값 반복
			>if문 i가 index1*6의 몫일 때
				>cnt, index2++ index1 += index2
		5. cnt 출력
		 */
		if(10 > 5) {
			System.out.println("안녕하세요");
		}
		System.out.println((int)'세');
		Scanner scan = new Scanner(System.in);
		int input = scan.nextInt();
		
		int index1 = 1;
		int index2 = 1;
		int cnt = 2;
		
		for(int i=0; i<input; i++) {
			if(i !=0 && i % (6 * index1) == 0) {
				cnt++;
				index2++;
				index1 += index2;
			}
			
		}
		
		System.out.println(cnt);
	}
}

		
