package com.java.level.one;

import java.util.ArrayList;

public class SkillCheck2 {
	public static void main(String[] args) {
		int[] arr = {4, 3, 2, 1};
		int[] answer = solution(arr);
	}

	private static int[] solution(int[] arr) {
		if(arr.length == 1) {
			int[] once = {-1};
			return once;
		}
		
		int[] answer = new int[arr.length-1];
		ArrayList<Integer> list = new ArrayList<Integer>();
		for(int i=0; i<arr.length; i++) {
			boolean flag = false;
			
			for(int j=0; j<arr.length; j++) {
				if(arr[i] > arr[j]) {
					flag = true;
				}
			}
			
			if(flag) {
				list.add(arr[i]);
			}
		}
		
		for(int i=0; i<list.size(); i++) {
			answer[i] = list.get(i);
		}
		return answer;
	}
}
