import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Animated } from 'react-native';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'voice'
  const [lastCheckIn, setLastCheckIn] = useState(new Date());
  const [pulseAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.1, duration: 1500, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1500, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const renderHome = () => (
    <View style={styles.content}>
      <View style={styles.topBar}>
        <Text style={styles.logoText}>AFTELIFE</Text>
        <TouchableOpacity style={styles.profileCircle} />
      </View>

      <View style={styles.mainCore}>
        <Text style={styles.statusTitle}>SYSTEM SECURED</Text>
        <Text style={styles.statusMain}>VITAL SIGNS: OK</Text>
        
        <View style={styles.checkInContainer}>
          <Animated.View style={[styles.pulseCircle, { transform: [{ scale: pulseAnim }] }]} />
          <TouchableOpacity style={styles.checkInButton} onPress={() => alert("Legacy Verified.")}>
            <Text style={styles.checkInButtonText}>CHECK-IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerLabel}>Next auto-trigger in:</Text>
          <Text style={styles.timerValue}>14 Days</Text>
        </View>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionCard} onPress={() => setCurrentView('voice')}>
          <Text style={styles.actionIcon}>🎙️</Text>
          <Text style={styles.actionText}>Voice Archiving</Text>
          <Text style={styles.actionSub}>2/10 Samples</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <Text style={styles.actionIcon}>📸</Text>
          <Text style={styles.actionText}>Vault Entry</Text>
          <Text style={styles.actionSub}>Secure Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderVoiceArchiving = () => (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => setCurrentView('home')} style={styles.backBtn}>
        <Text style={styles.backBtnText}>← Back to Dashboard</Text>
      </TouchableOpacity>

      <View style={styles.voiceHeader}>
        <Text style={styles.voiceTitle}>Voice Archiving</Text>
        <p style={styles.voiceDesc}>Record your voice to allow your family to hear your messages with AI clarity after you pass.</p>
      </View>

      <ScrollView style={styles.samplesList}>
        {[
          { id: 1, title: 'Sample 1: General Greeting', status: 'COMPLETED' },
          { id: 2, title: 'Sample 2: Emotional Advice', status: 'COMPLETED' },
          { id: 3, title: 'Sample 3: Daily Habits', status: 'EMPTY' },
          { id: 4, title: 'Sample 4: Childhood Stories', status: 'EMPTY' },
        ].map((item) => (
          <TouchableOpacity key={item.id} style={styles.sampleItem}>
            <View>
              <Text style={styles.sampleTitle}>{item.title}</Text>
              <Text style={[styles.sampleStatus, { color: item.status === 'COMPLETED' ? '#10B981' : '#64748B' }]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.sampleIcon}>{item.status === 'COMPLETED' ? '▶️' : '🎤'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.recordingArea}>
        <View style={styles.wavePlaceholder} />
        <TouchableOpacity style={styles.recordMainBtn}>
          <View style={styles.recordInner} />
        </TouchableOpacity>
        <Text style={styles.recordHint}>Hold to record Sample 3</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {currentView === 'home' ? renderHome() : renderVoiceArchiving()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#4F46E5',
  },
  mainCore: {
    alignItems: 'center',
    marginBottom: 40,
  },
  statusTitle: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 8,
  },
  statusMain: {
    color: '#F8FAFC',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  checkInContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  pulseCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(79, 70, 229, 0.2)',
  },
  checkInButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },
  checkInButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timerContainer: {
    alignItems: 'center',
  },
  timerLabel: {
    color: '#64748B',
    fontSize: 12,
    marginBottom: 4,
  },
  timerValue: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 16,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 12,
  },
  actionText: {
    color: '#F8FAFC',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  actionSub: {
    color: '#64748B',
    fontSize: 10,
  },
  backBtn: {
    marginBottom: 32,
  },
  backBtnText: {
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  voiceHeader: {
    marginBottom: 32,
  },
  voiceTitle: {
    color: '#F8FAFC',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  voiceDesc: {
    color: '#94A3B8',
    fontSize: 14,
    lineHeight: 20,
  },
  samplesList: {
    flex: 1,
  },
  sampleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  sampleTitle: {
    color: '#F8FAFC',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  sampleStatus: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  sampleIcon: {
    fontSize: 20,
  },
  recordingArea: {
    alignItems: 'center',
    paddingVertical: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  wavePlaceholder: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(79, 70, 229, 0.05)',
    borderRadius: 20,
    marginBottom: 24,
  },
  recordMainBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#EF4444',
  },
  recordInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EF4444',
  },
  recordHint: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 16,
  },
});
