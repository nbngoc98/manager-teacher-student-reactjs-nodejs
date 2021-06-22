

INSERT INTO `classes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '18T1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '18IT2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '18IT3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '18C1A', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '13D1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');



INSERT INTO `khoas` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Công Nghệ Thông Tin', '2021-06-09 14:22:09', '0000-00-00 00:00:00'),
(2, 'Cơ Khí', '2021-06-09 14:22:09', '0000-00-00 00:00:00'),
(3, 'Điện', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Trí tuệ nhân tạo', '0000-00-00 00:00:00', '0000-00-00 00:00:00');



INSERT INTO `students` (`id`, `name`, `birthday`, `khoa`, `lop`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyễn Văn A', '2000-01-01', 1, 1, '2021-06-21 08:07:00', '2021-06-21 08:07:00'),
(2, 'Nguyễn Văn B', '2000-01-01', 1, 2, '2021-06-21 08:07:24', '2021-06-21 08:07:24'),
(3, 'Nguyễn Văn C', '2000-01-01', 1, 3, '2021-06-21 08:07:33', '2021-06-21 08:07:33'),
(4, 'Nguyễn Văn D', '2000-01-01', 1, 2, '2021-06-21 08:07:44', '2021-06-21 08:07:44'),
(5, 'Nguyễn Văn E', '2000-01-01', 3, 4, '2021-06-21 08:07:55', '2021-06-21 08:07:55'),
(6, 'Nguyễn Văn F', '2000-01-01', 3, 4, '2021-06-21 08:08:04', '2021-06-21 08:08:04'),
(7, 'Nguyễn Văn F', '2000-01-01', 2, 5, '2021-06-21 08:08:15', '2021-06-21 08:08:15'),
(8, 'Nguyễn Văn G', '2000-01-01', 3, 4, '2021-06-21 08:08:26', '2021-06-21 08:08:26');



INSERT INTO `teachers` (`id`, `name`, `mail`, `khoa`, `phone`, `birthday`, `createdAt`, `updatedAt`) VALUES
(2, 'NGUYỄN TẤN KHÔI', 'ntkhoi@dut.udn.vnn', 2, '0903.511.889', '1971-10-30', '2021-06-21 07:30:06', '2021-06-21 08:48:20'),
(3, 'LÊ TIẾN DŨNG', 'ltdung@dut.udn.vn', 3, '0912.483.535', '1985-01-21', '2021-06-21 07:36:20', '2021-06-21 07:36:20'),
(4, 'ĐẶNG HOÀI PHƯƠNG', 'dhphuong@dut.udn.vn', 1, '0935 578.555', '1984-10-21', '2021-06-21 07:36:37', '2021-06-21 07:36:37'),
(5, 'LÊ VĂN THANH', 'levanthanh.ctm@gmail.com', 4, '0976.297.255', '1974-05-30', '2021-06-21 07:36:50', '2021-06-21 07:36:50'),
(6, 'HOÀNG VĂN THẠNH', 'hoangvanthanh.ctm@gmail.com', 2, '0976.297.068', '1974-05-30', '2021-06-21 07:37:01', '2021-06-21 07:37:01'),
(7, 'PHẠM MINH TUẤN', 'pmtuan@dut.udn.vn', 1, '0913. 230.910', '1974-05-30', '2021-06-21 07:37:15', '2021-06-21 07:37:15'),
(8, 'VÕ QUANG SƠN', 'vqson@dut.udn.vn', 3, '0914.000.054', '1974-05-30', '2021-06-21 07:37:24', '2021-06-21 07:37:24'),
(9, 'LÊ ĐÌNH DƯƠNG', 'ldduong@dut.udn.vn', 3, '0905.320.755', '1977-05-30', '2021-06-21 07:37:35', '2021-06-21 07:37:35'),
(10, 'LÊ HOÀI NAM', 'lehoainam@dut.udn.vn', 2, '0906.309.302', '1978-01-21', '2021-06-21 07:37:49', '2021-06-21 07:37:49'),
(11, 'LƯU ĐỨC BÌNH', 'ldbinh@dut.udn.vn', 2, '0914.015.014', '1979-01-27', '2021-06-21 07:38:00', '2021-06-21 07:38:00'),
(12, 'NGUYỄN THỊ MINH HỶ', 'ntmhy@dut.udn.vn', 1, '0989.600.305', '1985-07-14', '2021-06-21 07:38:09', '2021-06-21 07:38:09'),
(13, 'VÕ ĐỨC HOÀNG (CNTT)', 'hoangvd.it@dut.udn.vn', 1, '0906.477.283', '1981-03-14', '2021-06-21 07:38:18', '2021-06-21 07:38:18'),
(14, 'TRƯƠNG NGỌC CHÂU', 'tnchau@dut.udn.vn', 1, '0905.026.168', '1982-01-13', '2021-06-21 07:38:33', '2021-06-21 09:01:51'),
(15, 'ĐẶNG BÁ LƯU', 'ntkhoi@dut.udn.vn', 1, '0903.511.888', '1983-11-13', '2021-06-21 07:38:35', '2021-06-21 08:58:37'),
(16, 'Ngoc Bao', 'nbngoc.it@gmail.com', 4, '0366388171', '2021-06-08', '2021-06-21 08:18:53', '2021-06-21 08:18:53'),
(17, 'Admin', 'ntkhoi@dut.udn.vnn', 3, '0366388171', '', '2021-06-21 08:24:29', '2021-06-21 08:24:29'),
(18, 'NGOC BAO ssadsad', 'nbngoc.it@gmail.com', 4, '0366388171', '2021-06-04', '2021-06-21 08:25:44', '2021-06-21 08:25:44');
