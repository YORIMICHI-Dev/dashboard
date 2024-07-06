<script setup lang="ts"></script>

<template>
  <VRow>
    <!-- Microsoft Azure認定 -->
    <VCol cols="12" lg="6">
      <SharedUIParentCard title="Microsoft Azure認定">
        <div class="pa-4">
          <DashboardCertification
            day="2024/05"
            certification="Azure Developer Associate
           (AZ-204)"
          />
          <DashboardCertification day="2024/04" certification="Azure Data Fundamentals (DP-900)" />
          <DashboardCertification day="2024/04" certification="Azure AI Fundamentals (AI-900)" />
          <DashboardCertification day="2024/03" certification="Azure Fundamentals (AZ-900)" />
        </div>
      </SharedUIParentCard>
    </VCol>

    <!-- AWS認定 -->
    <VCol cols="12" lg="6">
      <SharedUIParentCard title="AWS認定">
        <div class="pa-4">
          <DashboardCertification
            day="2023/05"
            certification="AWS Certified Solutions Architect - Associate (SAA-C03)"
          />
          <DashboardCertification day="2023/04" certification="AWS Certified Cloud Practitioner (CLF-C01)" />
        </div>
      </SharedUIParentCard>
    </VCol>

    <!-- 情報処理技術者試験 -->
    <VCol cols="12" lg="4">
      <SharedUIParentCard title="情報処理技術者試験">
        <div class="pa-4">
          <DashboardCertification day="2023/12" certification="応用情報技術者試験" />
          <DashboardCertification day="2022/07" certification="基本情報技術者試験" />
        </div>
      </SharedUIParentCard>
    </VCol>

    <!-- ディープラーニング協会 -->
    <VCol cols="12" lg="4">
      <SharedUIParentCard title="ディープラーニング協会">
        <div class="pa-4">
          <DashboardCertification day="2024/06" certification="Generative AI Test" />
          <DashboardCertification day="2024/03" certification="G検定" />
        </div>
      </SharedUIParentCard>
    </VCol>

    <!-- LPIC -->
    <VCol cols="12" lg="4">
      <SharedUIParentCard title="LPIC">
        <div class="pa-4">
          <DashboardCertification day="2023/08" certification="LPIC Level-1" />
        </div>
      </SharedUIParentCard>
    </VCol>

    <!-- Oracle資格 -->
    <VCol cols="12" lg="4">
      <SharedUIParentCard title="Oracle資格">
        <div class="pa-4">
          <DashboardCertification day="2022/01" certification="Java SE 11 Programmer I (Java Silver)" />
        </div>
      </SharedUIParentCard>
    </VCol>
  </VRow>
</template>
