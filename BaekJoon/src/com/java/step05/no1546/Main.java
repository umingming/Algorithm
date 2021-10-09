package com.java.step05.no1546;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		모든 점수/최대값 * 100으로 새로운 평균 구하기
		
		설계>
		1. Scanner
		2. 숫자 입력 받기
		3. 입력 받은 점수를 길이로 하는 int 배열 선언
		4. sum과 avg 변수 선언
		5. for문 배열의 길이
			>요소에 숫자 입력 받음
		6. 배열 정렬
		7. for문 배열의 길이
			>요소의 값/최대 값*100으로 수정
			>sum에 요소의 값 저장함.
		8. avg를 sum/배열의 길이로 초기화함.
		9. avg출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int length = scan.nextInt();
		
		int[] scores = new int[length];
		double sum = 0;
		int max = 0;
		double avg;
		for(int i=0; i<scores.length; i++) {
			scores[i] = scan.nextInt();
			
			max = Math.max(scores[i], max);
		}
		
		System.out.println(max);
		
//		Arrays.sort(scores);
//		for(int i=0; i<scores.length; i++) {
//			scores[i] = scores[i] * 100 / scores[scores.length-1];
//			sum += scores[i];
//		}
//		
//		avg = sum / scores.length;
//		
//		System.out.println(avg);
	}

}
