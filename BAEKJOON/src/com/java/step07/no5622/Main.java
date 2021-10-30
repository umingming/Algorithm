package com.java.step07.no5622;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		할머니가 외운 단어가 주어졌을 때 이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오.
		- UNUCIC ; 9, 7, 9, 3, 3, 5
		
		설계>
		1. Scanner
		2. 문자열 입력
		3. time 변수 선언
		4. for문으로 글자 수 반복
			>switch문 알파벳에 따라 time에 값 저장
		5. time 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		int time = 0;
		
		for(int i=0; i<input.length(); i++) {
			char c = input.charAt(i);
			if(c < 'D') time += 3;
			else if(c < 'G') time += 4;
			else if(c < 'J') time += 5;
			else if(c < 'M') time += 6;
			else if(c < 'P') time += 7;
			else if(c < 'T') time += 8;
			else if(c < 'W') time += 9;
			else time += 9;
				
//			switch(c) {
//			case 'A' :
//			case 'B' :
//			case 'C' :
//				time += 3;
//				break;
//			case 'D' :
//			case 'E' :
//			case 'F' :
//				time += 4;
//				break;
//			case 'G' :
//			case 'H' :
//			case 'I' :
//				time += 5;
//				break;
//			case 'J' :
//			case 'K' :
//			case 'L' :
//				time += 6;
//				break;
//			case 'M' :
//			case 'N' :
//			case 'O' :
//				time += 7;
//				break;
//			case 'P' :
//			case 'Q' :
//			case 'R' :
//			case 'S' :
//				time += 8;
//				break;
//			case 'T' :
//			case 'U' :
//			case 'V' :
//				time += 9;
//				break;
//			case 'W' :
//			case 'X' : 
//			case 'Y' :
//			case 'Z' :
//				time += 10;
//				break;
//			}
		}
		System.out.println(time);
	}

}
