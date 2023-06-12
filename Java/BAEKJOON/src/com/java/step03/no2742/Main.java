package com.java.step03.no2742;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		자연수 N이 주어졌을 때 N부터 1까지 한 줄에 하나씩 출력하시오.
		
		설계>
		1. Scanner
		2. 숫자 입력
		3. for문 N반복 >N-i 출력
		*/
		
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		
		for(int i=0; i<num; i++) {
			System.out.println(num - i);
		}
	}
}
