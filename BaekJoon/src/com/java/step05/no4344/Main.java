package com.java.step05.no4344;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		평균을 넘는 학생들의 비율을 출력하시오.
		-과목의 갯수, 학생의 수, 각 점수들
		
		설계>
		1. Scanner
		2. 과목 수 입력
		3. 입력 받은 수를 길이로 하는 integer 배열 선언
		4. for문 배열 길이
			>학생 수 입력
			>학생 수를 길이로 하는 배열 선언
			>sum, avg, count 변수 선언
			>for문 학생 수
				>점수 입력
				>sum에 추가함
			>avg 계산
			>for문 학생 수
				>if문 점수가 avg보다 큰가? count++
			>count/학생 배열의 길이 printf로 출력함.
		 */
		
		Scanner scan = new Scanner(System.in);
		
		int test = scan.nextInt();
		
		for(int i=0; i<test; i++) {
			int student = scan.nextInt();
			int[] scores = new int[student];
			int sum = 0;
			double avg = 0;
			int count = 0;
			
			for(int j=0; j<scores.length; j++) {
				scores[j] = scan.nextInt();
				sum += scores[j];
			}
			
			avg = (double)sum / scores.length;
			
			for(int j=0; j<scores.length; j++) {
				if(scores[j] > avg) {
					count++;
				}
			}
			
			System.out.printf("%.3f%%", count / scores.length);
			
		}

	}

}
