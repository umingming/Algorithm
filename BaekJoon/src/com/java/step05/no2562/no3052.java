package com.java.step05;

import java.util.Scanner;

public class no3052 {

	public static void main(String[] args) {
		/*
		���� 10���� �Է� �ް� 42�� ���� �������� ���� �ٸ� ���� �� �� �ִ��� ����Ͻÿ�.
		
		����>
		1. Scanner
		2. ���̰� 10�� integer �迭 ����
		3. count���� ����
		4. for�� �迭�� ���� �ݺ�
			>i��° ��ҿ� �Է� ���� ���ڸ� 42�� ���� �� ����
			>�������� �ߺ�Ȯ�� ���� ���� �� false�� �ʱ�ȭ
			>for�� i-1�ݺ�
				>if�� i��°�� j��° ��Ұ� ������?
					>�� ���� true�� ����
			>if�� �ߺ��� �ƴϸ�? count++
		5. ��� ���
		 */
		
		Scanner scan = new Scanner(System.in);
		int[] nums = new int[10];
		int count = 0;
		
		for(int i=0; i<nums.length; i++) {
			nums[i] = (scan.nextInt()) % 42;
			boolean isDuplicate = false;
			
			for(int j=0; j<i; j++) {
				if(nums[i] == nums[j]) {
					isDuplicate = true;
				}
			}
			
			if(!isDuplicate) {
				count++;
			}
		}
		
		System.out.println(count);
	}

}
