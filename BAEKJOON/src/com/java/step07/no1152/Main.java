package com.java.step07.no1152;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		문자열에 단어가 몇 개있는지
		
		설계>
		1. Scanner
		2. 입력받은 문자열을 split으로 쪼개서 배열에 저장
		3. 배열의 길이 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine().trim();
//		if(input.equals("")) {
//			System.out.println(0);
//		} else {
			String[] arr = input.split(" ");
			System.out.println(arr.length);
//		}
		

	}

}
