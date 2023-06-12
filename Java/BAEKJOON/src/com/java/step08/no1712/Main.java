package com.java.step08.no1712;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		/*
		손익분기점을 구하는 프로그램을 작성하시오.
		-A:고정 비용, B:가변 비용
		-ea; a/(c-b) + 1
		
		설계>
		1. Scanner
		2. A, B, C에 int값 입력 받음.
		3. ea 변수 선언
		4. if문 c>b? ea 초기화 후 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int b = scan.nextInt();
		int c = scan.nextInt();
		int ea = -1;
		
		if(c > b) {
			ea = a / (c-b) +1;
		}
		
		System.out.println(ea);
		
	}

}
