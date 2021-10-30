package com.java.step07.no2908;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		두 수가 주어졌을 때 상수의 대답을 출력하는 프로그램을 작성하시오.
		-상수는 734를 437이라고 읽음.
		
		설계>
		1. Scanner
		2. String 변수에 숫자들을 입력 받음.
		3. 공백을 구분자로 입력 받은 숫자를 배열로 만듦.
		4. for문 요소의 길이
			>String변수에 거꾸로 저장함.
		5. if문 뭐가 더 큰지?
		 */
		
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		String[] temp = input.split(" ");
		
		int a = Integer.parseInt(new StringBuilder().append(temp[0]).reverse().toString());
		int b = Integer.parseInt(new StringBuilder().append(temp[1]).reverse().toString());
		
		System.out.println(a > b ? a : b);
//		String num1 = "";
//		String num2 = "";
//		
//		for(int i=2; i>=0; i--) {
//			num1 += temp[0].charAt(i);
//			num2 += temp[1].charAt(i);
//		}
//		
//		if(Integer.parseInt(num1)>Integer.parseInt(num2)) {
//			System.out.println(num1);
//		} else {
//			System.out.println(num2);
//		}

	}

}
