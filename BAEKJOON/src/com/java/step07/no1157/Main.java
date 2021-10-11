package com.java.step07.no1157;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		영어 단어 중 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
		-대소문자 구분하지 않음.
		-알파벳 대문자로 출력
		
		설계>
		1. Scanner
		2. 단어 입력
		3. int 배열 선언 
		4. for문 단어 길이
			>charAt로 문자 뽑기
			>if문 대소문자
				>배열 요소에 해당되는 값++
		5. 배열 정렬
		6. if문 마지막 요소와 그 전 요소의 값이 같은지? 
		 */
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		int[] alphabet = new int['z' - 'a' + 1];
		
		for(int i=0; i<input.length(); i++) {
			char c = input.charAt(i);
			if(c < 'A') {
				c += 'A' - 'a';
			}
			alphabet[c - 'A']++;
		}
		
		int highFrequncy = 0;
		boolean multi = false;
		
		for(int i=0; i<alphabet.length; i++) {
			if(highFrequncy < alphabet[i]) {
				highFrequncy = i;
			} else if(highFrequncy == alphabet[i]) {
				multi = true;
			}
		}
		
		if(multi) {
			System.out.println("?");
		}else {
			System.out.println('a' + highFrequncy);
		}

	}

}
