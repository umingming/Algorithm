package com.java.step04.no10952;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		두 정수 A와 B를 입력 받은 다음, A+B를 출력하는 프로그램을 작성하시오.
		
		설계>
		1. Scanner
		2. while문
			>next로 토큰 단위 입력 받아 integer로 형변환해 a, b에 저장
			>if문 a, b가 0?
				>break;
				>아니면 a+b 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		
		while(true) {
			int a = Integer.parseInt(scan.next());
			int b = Integer.parseInt(scan.next());
			
			if(a == 0 && b == 0) {
				break;
			} else {
				System.out.println(a+b);	
			}
		}
		
	}
}
